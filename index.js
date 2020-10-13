require("dotenv").config();
require("./config/db");
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const app = express();
const photos = require("./routes");

app.use(helmet());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");

app.use("/photos", photos);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/gioi-thieu", (req, res) => {
  res.render("introduct");
});

app.get("/gia-chup-hinh", (req, res) => {
  res.render("price");
});

app.get("/hinh-anh", (req, res) => {
  res.render("images");
});

app.get("/lien-he", (req, res) => {
  res.render("contact");
});

const PORT = process.env.PORT || 1002;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
