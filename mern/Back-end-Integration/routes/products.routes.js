const express = require('express');
const router = express.Router();
const multer = require('multer');
const authMiddleware = require('../middlewares/auth.middleware');
const productModel = require('../models/product.model'); // Ensure correct import of product model
const productController = require('../controllers/product.cotroller'); // Fix typo in controller import

// Multer setup for file uploads (if applicable)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

// Middleware to check if the user is authenticated and is a seller
router.use(authMiddleware.isAuthenticated);
router.use(authMiddleware.isSeller);

// Route to create a product (POST)
router.post('/ ', upload.any('image'), async (req, res) => {
    try {
        const { name, price, category, description } = req.body;

        // Validate required fields: name, price, and description
        if (!name || !price || !description) {
            return res.status(400).json({ error: 'Name, price, and description are required' });
        }

        // If images are uploaded, map through the files and get their paths, otherwise set as an empty array
        const images = req.files ? req.files.map(file => file.path) : [];

        // Create the product object
        const product = new productModel({
            name,
            price,
            category,
            description,
            images  // Store images array (it will be empty if no image is uploaded)
        });

        // Save the product to the database
        await product.save();
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route to fetch all products (GET)
router.get('/products', productController.getAllProducts);

module.exports = router;
