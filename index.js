import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

//ROUTES
import userRoute from "./routes/user.js";
import authRoute from "./routes/auth.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import orderRoute from "./routes/order.js";
import paymentRoute from "./routes/stripePayment.js";
//ROUTES

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const URL = process.env.URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.use("/order", orderRoute);
app.use("/checkout", paymentRoute);

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
