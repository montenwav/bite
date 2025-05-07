const express = require("express");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const router = require("./routes/products");
const connectDB = require("./db/connect");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// statics
app.use(express.static("../client/public"));
app.use(express.static("../client/src"));
app.use(cors());

// app routes
app.get("/", (req, res) => res.send("main"));

// routers
app.use("/api/products", router);

// middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

(async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`server in running on port ${port}`));
  } catch (err) {
    app.get((req, res) => res.error(err));
  }
})();
