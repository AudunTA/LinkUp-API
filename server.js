const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello api");
});

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
