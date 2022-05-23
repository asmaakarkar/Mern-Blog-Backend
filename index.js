const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected..."))
  .catch((err) => console.log("Error: ", err));

app.listen("5001", () => {
  console.log("Backend is running...");
});