const express = require("express");
const requireAuth = require("../../middleware/requireAuth");
const { getAllTracks, createTrack } = require("../../controllers/track");
const router = express.Router();

router.get("/", requireAuth, getAllTracks);
router.post("/", requireAuth, createTrack);

module.exports = router;
