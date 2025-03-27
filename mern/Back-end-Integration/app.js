require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
const connectDB = require('./config/mongodb');
const indexRoutes = require('./routes/index.route');
const userRoutes = require('./routes/user.route');
const productRoutes = require('./routes/products.routes');

connectDB();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', indexRoutes);
app.use('/user', userRoutes);
app.use('/products', productRoutes); 

app.get('/', (req, res) => {
    res.send('My server is currently running');
});


app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong on the server' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` Server is running on port ${PORT}`);
});
