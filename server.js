const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = requred("./models/productModel");
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello api");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://admin:470555184@linkupapi.xdq7mj8.mongodb.net/LinkUp-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongoDB");
    app.listen(3000, () => {
      console.log("The app is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
