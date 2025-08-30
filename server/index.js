const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const newArrivalRoute = require("./routes/newArrival");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/newArrivals", newArrivalRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/create-checkout-session", stripeRoute);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
