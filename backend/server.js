const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/priyas-collection", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Routes
const productsRoute = require("./routes/products");
app.use("/api/products", productsRoute);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const stripe = require('stripe')('your-stripe-secret-key'); // Replace with your Stripe Secret Key

const connectDB = require('./database/connect');
const ordersRoute = require('./routes/orders');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
connectDB();

// Routes
app.use('/api/orders', ordersRoute);

// Stripe Payment Route
app.post('/api/checkout', async (req, res) => {
    try {
        const { amount, token } = req.body;

        const charge = await stripe.charges.create({
            amount: amount * 100, // Amount in cents
            currency: 'usd',
            source: token.id,
            description: 'Payment for Priya\'s Collection',
        });

        res.status(200).json({ success: true, charge });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);
