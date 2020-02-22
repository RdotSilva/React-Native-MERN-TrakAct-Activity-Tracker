const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User");

const router = express.Router();

// @desc    Register user
// @route   POST /signup
// @access  Public
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

// @desc    Login
// @route   POST /signin
// @access  Public
exports.signIn(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Must supply email and password" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(422).send({ error: "Invalid password or email" });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, "NOTSECRET");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
});
