const express = require("express");
require("dotenv").config();

const cors = require("cors");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.cors(cors());

const connectDB = require("./dbinit.js");
connectDB();

app.get("/", (req, res) => {
  res.send("Lyrics database");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

const song = require("./routes/songRoutes");
app.use("/songs", song);
