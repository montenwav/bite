const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  let product = await Product.find({});
  if (!product) {
    res.status(404).json({ msg: "DB is empty!" });
  }
  res
    .status(200)
    .json({ success: true, data: product, length: product.length });
};

module.exports = { getAllProducts };
