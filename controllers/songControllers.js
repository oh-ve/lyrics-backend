const Song = require("../schemas/Song");

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.status(200).json({
      songs,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getOneSong = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(req.params.id);
    res.status(200).json({
      song,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const createSong = async (req, res) => {
  try {
    const { artist, title, album, year, lyrics, artwork } = req.body;
    console.log("req.body:", req.body);
    const song = await Song.create({
      artist,
      title,
      album,
      year,
      lyrics,
      artwork,
    });
    res.status(201).json({
      success: true,
      song,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteAllSongs = async (req, res) => {
  try {
    const songs = await Song.deleteMany({});
    res.status(200).json({
      response: "All songs deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  deleteAllSongs,
  getAllSongs,
  getOneSong,
  createSong,
};
