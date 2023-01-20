
// Package import
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");


app.use(cors());

// routes Import
const UserRoutes = require("./Routes/UserRoutes.js");
const AuthRoutes = require ('./Routes/AuthRoutes.js')
const ProductRoutes = require ('./Routes/ProductRoutes.js')
const CartRoutes = require ('./Routes/CartRoutes.js')
const OrderRoutes = require ('./Routes/OrderRoutes.js')
const PaymentRoutes = require ('./Routes/StripeRoutes.js')


// cross orgin policy 


// Hidden Key Configuration
dotenv.config();

// Json Parser Middleware
app.use(express.json());

// Router Level Middleware
app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/order", OrderRoutes);
app.use("/api/payment", PaymentRoutes);


app.get("/",(req,res) => {
  res.send("Amazon Server Working");
})

// DB Connction

mongoose
  .connect(process.env.DB_CONNECTION_URL).then(() => console.log("Server is Working 🚀"))
  .catch((err) => console.log(err));

// Server Connection 

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is Start 🔥");
});
