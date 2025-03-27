const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const paymentSchema = new Schema({
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'order',
        required: true
    },
    paymentId: {
        type: String,
        required: true
    },
    signature: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'success', 'failed']
    }
}, {timestamps: true});

const payment = mongoose.model('payment', paymentSchema);

module.exports = payment;