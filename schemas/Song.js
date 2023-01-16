const mongoose = require("mongoose");

const { Schema } = mongoose;

const songSchema = new Schema({
  artist: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  lyrics: {
    type: String,
    required: true,
  },
  artwork: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Song", songSchema);
