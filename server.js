const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

const connectDB = require("./dbinit.js");
connectDB();

app.get("/", (req, res) => {
  res.send("WELCOME TO MY STUPID API");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

const song = require("./routes/songRoutes");
app.use("/songs", song);
