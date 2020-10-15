require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const db = require("./config/db");
const app = express();

if(process.env.DEV === 'PRODUCTION'){
  app.use(helmet());
  app.use(cors());
}

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

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

app.get("/photos", (req, res) => {
  db.query("SELECT * FROM photos", function (error, results, _) {
    if (error) return res.render("photos", { results: [], error: 'Oop!! Wrong something' });

    return res.render("photos", { results, error: '' });
  });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

const PORT = process.env.PORT || 1002;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
