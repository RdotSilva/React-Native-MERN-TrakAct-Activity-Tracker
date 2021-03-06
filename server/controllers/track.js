const mongoose = require("mongoose");
const Track = mongoose.model("Track");

// @desc    Fetch all tracks
// @route   GET /api/v1/tracks
// @access  Private
exports.getAllTracks = async (req, res) => {
  // Get tracks from specific user
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
};

// @desc    Create new track
// @route   POST /api/v1/tracks
// @access  Private
exports.createTrack = async (req, res) => {
  const { name, locations, type } = req.body;

  if (!name || !locations || !type) {
    return res
      .status(422)
      .send({ error: "You must provide a name, locations, and activity type" });
  }

  try {
    // Create a new track using the request body data
    const track = new Track({
      name,
      locations,
      type,
      userId: req.user._id
    });
    await track.save();
    res.send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
};
