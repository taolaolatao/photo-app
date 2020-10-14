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

app.get("/introduction", (req, res) => {
  res.render("introduction");
});

app.get("/price-new-born", (req, res) => {
  res.render("price-new-born");
});

app.get("/price-baby", (req, res) => {
  res.render("price-baby");
});

app.get("/images", (req, res) => {
  res.render("images");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

const PORT = process.env.PORT || 1002;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
