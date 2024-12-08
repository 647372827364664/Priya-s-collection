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
