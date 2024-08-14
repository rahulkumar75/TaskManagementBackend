const express = require("express");
const router = express.Router();

const pageController = require("./../controller/pageController");

router
  .route("/")
  .get(pageController.getHome)

module.exports = router;
