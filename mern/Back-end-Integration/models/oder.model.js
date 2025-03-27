const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    products: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: 'payment',
        required: true
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled']
    }
})
const order = mongoose.model('order', orderSchema);

module.exports = order;