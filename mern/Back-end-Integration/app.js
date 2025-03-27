require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./config/mongodb');
const indexRoutes = require('./routes/index.route');
const userRoutes = require('./routes/user.route');
const productRoutes = require('./routes/products.routes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.send('✅ My server is currently running');
});

// 404 Error Handler
app.use((req, res) => {
    res.status(404).json({ error: '❌ Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('❌ Server Error:', err.stack);
    res.status(500).json({ error: 'Something went wrong on the server' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
