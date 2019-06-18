const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:ale19081993777@cluster0-sm9eb.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

// app.get("/", (req, res) => {
//   return res.send(`Hello ${req.query.name}`);
// });

app.use(require("./routes"));

app.listen(3333);
