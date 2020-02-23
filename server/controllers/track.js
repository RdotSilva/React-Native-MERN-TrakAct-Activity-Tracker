const mongoose = require("mongoose");
const Track = mongoose.model("Track");

// @desc    Fetch all tracks
// @route   GET /api/v1/tracks
// @access  Public
exports.getAllTracks = async (req, res) => {
  // Get tracks from specific user
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
};
