const config = require("../config");
const db = require("../config/db");

const getPhotos = async (req, res) => {
  db.query("SELECT * FROM photos", function (error, results, _) {
    if (error) res.status(500).json(error);

    return res.status(200).json(results);
  });
};

const getSlidePhotos = async (req, res) => {};

module.exports = {
  getPhotos,
  getSlidePhotos,
};
