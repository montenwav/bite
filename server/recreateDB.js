/*
    Execution of this code will recreate the DB with new values!
*/

require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const { cardsArr } = require("./cardsArr.js");

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(cardsArr);
    console.log("Success!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
