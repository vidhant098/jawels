const express = require("express");
const validateCart = require("../middleware/validateCart");

const router = express.Router();

let cart = [];

// POST /cart
router.post("/", validateCart, (req, res) => {
  const { productId, quantity } = req.body;

  cart.push({ productId, quantity });

  res.status(201).json({
    message: "Product added to cart",
    cart
  });
});

module.exports = router;
