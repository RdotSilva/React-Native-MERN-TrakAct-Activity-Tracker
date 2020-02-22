const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User");

const router = express.Router();

exports.signUp(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });

    await user.save();

    // Create and send token
    const token = jwt.sign({ userId: user._id }, "NOTSECRET");
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});
