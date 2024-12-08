const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    products: Array,
    totalAmount: Number,
    paymentStatus: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
