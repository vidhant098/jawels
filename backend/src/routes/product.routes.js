const express = require("express");
const products = require("../data/products");

const router = express.Router();

// GET /products
router.get("/", (req, res) => {
  res.status(200).json(products);
});

module.exports = router;
