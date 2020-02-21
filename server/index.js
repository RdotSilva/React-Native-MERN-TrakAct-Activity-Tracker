const express = require("express");
const mongoose = require("mongoose");
const mongoURI = require("./config/config").mongoURI;

// Routes
const auth = require("./routes/auth/auth");

const app = express();

app.use(auth);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB!`);
});

mongoose.connection.on("error", err => {
  console.error(`Error connected to MongoDB: ${err}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
