const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  id: Number,
  display_title: String,
  src: String,
  colors: Array,
  type: String,
  reviews: String,
  month_price: Number,
  title: String,
  flouride: Boolean,
  count: Number,
  price: Number,
  old_price: Number,
});

module.exports = mongoose.model("Product", ProductSchema);
