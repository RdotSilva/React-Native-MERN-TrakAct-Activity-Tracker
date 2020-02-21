const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("Post req made to signup route");
});

module.exports = router;
