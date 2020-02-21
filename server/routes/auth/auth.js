const express = require("express");

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("Post req made to signup route");
});

module.exports = router;
