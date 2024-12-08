const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Save Order
router.post('/save', async (req, res) => {
    try {
        const { name, email, address, products, totalAmount } = req.body;

        const order = new Order({
            name,
            email,
            address,
            products,
            totalAmount,
            paymentStatus: 'Paid',
        });

        await order.save();
        res.status(200).json({ success: true, order });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
