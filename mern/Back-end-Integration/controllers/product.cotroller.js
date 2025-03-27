const productModel = require('../models/product.model');

exports.createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;

        if (req.files && req.files.length > 0) {
            req.files.forEach(file => console.log(file.publicUrl));
        }

        if (!name || !price || !description) {
            return res.status(400).json({ error: 'Please fill all fields' });
        }

        const newProduct = await productModel.create({ name, price, description });
        return res.status(201).json(newProduct);

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: error.message });
    }
};

// Updated function to fetch all products and ensure required fields are returned
exports.getAllProducts = async (req, res) => {
    try {
        // Use .select() to choose the necessary fields to return
        const products = await productModel.find().select('name price description images'); 

        if (!products || products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        return res.status(200).json({ message: 'Products fetched successfully', products });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: error.message });
    }
};
