const express = require("express");
const {
  getAllMovies,
  searchMovie,
  register,
  login,
  getAllMusic,
  addToFav,
  getFavourite,
} = require("../controllers/moviesController");

// const getAllMoviesMiddleware = (req, res, next) => {
//   console.log("get All Movies");
//   next();
// };

const movieRouter = express.Router();

movieRouter.get("/", getAllMovies);

movieRouter.get("/music", getAllMusic);

movieRouter.get("/search/:term", searchMovie);

movieRouter.post("/register", register);
movieRouter.post('/login', login);

movieRouter.get("/favourite", getFavourite);
movieRouter.post('/favourite/:id/:media/:term', addToFav);
// movieRouter.post("/", createNewMovie);

// movieRouter.put("/:id", updateMovieDetails);

// movieRouter.delete("/:id", deletemovie);

module.exports = movieRouter;
