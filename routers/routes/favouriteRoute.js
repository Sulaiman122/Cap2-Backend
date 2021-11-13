const express = require("express");
const {
  addToFav,
  getFavourite,
} = require("../controllers/favouriteController");



const favouriteRouter = express.Router();

favouriteRouter.get("/favourite", getFavourite);
favouriteRouter.post('/favourite/:id/:media/:term', addToFav);

module.exports = favouriteRouter;
