const express = require("express");
const {
  getAllMovies,
  searchMovie,
  getAllAudio,
  getAllEbooks,
} = require("../controllers/moviesController");



const movieRouter = express.Router();

movieRouter.get("/movies", getAllMovies);

movieRouter.get("/audio", getAllAudio);
movieRouter.get("/ebook", getAllEbooks);

movieRouter.get("/search/:term", searchMovie);


module.exports = movieRouter;
