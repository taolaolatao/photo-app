const router = require("express").Router();
const {
  getPhotos,
  getSlidePhotos,
} = require("../controllers/photo.controller");

router.get("/", getPhotos);
router.get("/slide", getSlidePhotos);

module.exports = router;
