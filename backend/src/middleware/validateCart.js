const validateCart = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId || !quantity || quantity <= 0) {
    return res.status(400).json({
      message: "Invalid productId or quantity"
    });
  }

  next();
};

module.exports = validateCart;
