require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Book = require("./models/Books");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/book", async (req, res) => {
  try {
    const data = await Book.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occured while fetching books" });
  }
});

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
