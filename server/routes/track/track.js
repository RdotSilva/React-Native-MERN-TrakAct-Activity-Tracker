const express = require("express");
const requireAuth = require("../../middleware/requireAuth");
const { getAllTracks } = require("../../controllers/track");
const router = express.Router();

router.get("/", requireAuth, getAllTracks);

module.exports = router;
