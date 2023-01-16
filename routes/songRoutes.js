const express = require("express");
const app = express.Router();

const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteAllSongs,
} = require("../controllers/songControllers");

app.route("/allsongs").get(getAllSongs);

app.route("/save").post(createSong).delete(deleteAllSongs);

app.route("/allsongs/:id").get(getOneSong);

module.exports = app;
