const axios = require("axios");
const fs = require("fs");
const itunesApiSearch = require("itunes-api-search");


console.log(process.env.PORT);


const getAllMovies = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=action&media=movie")
    .then((data) => {
      res.status(200).json(data.data);
    });
};

const getAllAudio = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=silence&media=music&limit=50")
    .then((data) => {
      res.status(200).json(data.data);
    });
};

const getAllEbooks = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=money&media=ebook&limit=50")
    .then((data) => {
      res.status(200).json(data.data);
    });
};

const searchMovie = (req, res) => {
  const term = req.params.term;
  let result = {};
  itunesApiSearch
    .search(
      term,
      {
        limit: 50, // max 200
        media: "movie",
      },
      function (err, res) {
        if (err) {
          res.status(400).json(err);
          return;
        }
        result = res;
      }
    )
    .then(() => {
      res.status(201).json(result);
    });
};




module.exports = {
  getAllMovies,
  searchMovie,
  getAllAudio,
  getAllEbooks,
};
