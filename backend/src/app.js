const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/product.routes");

const app = express();

app.use(cors());
app.use(express.json()); 

const cartRoutes = require("./routes/cart.routes");

app.use("/cart", cartRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/products", productRoutes);

module.exports = app;
