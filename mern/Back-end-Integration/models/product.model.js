const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,  
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'user', 
        required: true,
    },
    images: [{
        type: String,  
    }],
}, { timestamps: true });

const Product = mongoose.model('product', productSchema);

module.exports = Product;
