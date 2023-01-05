const express = require("express");

const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const UserRoutes = require("./Routes/UserRoutes.js");

dotenv.config();

// Json Parser Middleware
app.use(express.json());

// Router Level Middleware
app.use("/api/user", UserRoutes);

// DB Connction

mongoose
  .connect(process.env.DB_CONNECTION_URL).then(() => console.log("Server is Working 🚀"))
  .catch((err) => console.log(err));

// Server Starting

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is Start 🔥");
});
