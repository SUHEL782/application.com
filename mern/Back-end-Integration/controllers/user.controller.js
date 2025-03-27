const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const blacklistModel = require('../models/blacklist.model');
const productModel = require('../models/product.model');
const Razorpay = require('razorpay');
const paymentModel = require('../models/payment.model');

require('dotenv').config();

const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

module.exports.signup = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        console.log("🟢 Signup API called with:", { username, email, role });

        if (!username || !email || !password || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (!['user', 'seller'].includes(role)) {
            return res.status(400).json({ message: 'Invalid role. Choose "user" or "seller".' });
        }

        const existingUser = await userModel.findOne({ email }).exec();
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({ username, email, password: hashedPassword, role });

        const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.status(201).json({
            message: role === 'seller' ? 'Seller account created successfully' : 'User account created successfully',
            token
        });

    } catch (error) {
        console.error(" Signup Error:", error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const user = await userModel.findOne({ email }).exec();
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });

        return res.status(200).json({ message: 'User logged in successfully', token });

    } catch (error) {
        console.error(" Signin Error:", error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports.logout = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(400).json({ message: 'Authorization header missing' });
        }

        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(400).json({ message: 'Token missing in Authorization header' });
        }

        const isTokenBlacklisted = await blacklistModel.findOne({ token }).exec();
        if (isTokenBlacklisted) {
            return res.status(400).json({ message: 'User already logged out' });
        }

        await blacklistModel.create({ token });

        return res.status(200).json({ message: 'User logged out successfully' });

    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports.getProfile = async (req, res) => {
    try {
        const user = await userModel.findById(req.user.id).exec();
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json({ message: 'User fetched successfully', user });

    } catch (error) {
        console.error(" Get Profile Error:", error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports.getProducts = async (req, res) => {
    try {
        const products = await productModel.find().exec();
        return res.status(200).json({ message: 'Products fetched successfully', products });

    } catch (error) {
        console.error(" Get Products Error:", error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports.getProductById = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.productId).exec();
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        req.product = product;
        next();

    } catch (error) {
        console.error(" Get Product By ID Error:", error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports.createOrder = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await productModel.findById(productId).exec();
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const totalPrice = product.price * quantity;
        
        const payment = await paymentModel.create({
            orderId: req.body.orderId || null,
            paymentId: req.body.paymentId || '',
            signature: req.body.signature || '',
            amount: totalPrice,
            currency: 'INR'
        });

        return res.status(201).json({ message: 'Order created successfully', payment });

    } catch (error) {
        console.error("Create Order Error:", error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports.verifyPayment = async (req, res) => {
    try {
        const { paymentId, orderId, signature } = req.body;
        const key_secret = process.env.RAZORPAY_KEY_SECRET;
        const { validatePaymentVerification } = require('razorpay/dist/utils/razorpay-utils.js');

        const isValid = validatePaymentVerification(
            { payment_id: paymentId, order_id: orderId },
            signature,
            key_secret
        );

        if (isValid) {
            const payment = await paymentModel.findOneAndUpdate(
                { paymentId },
                { status: 'success' },
                { new: true }
            ).exec();

            return res.status(200).json({ message: 'Payment successful', payment });
        } else {
            await paymentModel.findOneAndUpdate(
                { paymentId },
                { status: 'failed' },
                { new: true }
            ).exec();

            return res.status(400).json({ message: 'Payment verification failed' });
        }
        
    } catch (error) {
        console.error("Verify Payment Error:", error);
        return res.status(500).json({ message: 'Server error', error: error.message });
    }
};
