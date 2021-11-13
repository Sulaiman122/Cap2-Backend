const axios = require("axios");
const fs = require("fs");
const itunesApiSearch = require("itunes-api-search");

// let movies = [];

console.log(process.env.PORT);

const getMyAPI = () => {
  // await axios
  //   .get("https://itunes.apple.com/search?term=away&media=movie&limit=50")
  //   .then((data) => {
  //     movies = data.data;
  //   });

  fs.writeFile("./db/movies.json", JSON.stringify(movies), (err) => {
    if (err) {
      console.log(err);
      return err;
    }
  });
};
// getMyAPI();

const getAllMovies = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=action&media=movie")
    .then((data) => {
      res.status(200).json(data.data);
    });
};

const getAllMusic = async (req, res) => {
  await axios
    .get("https://itunes.apple.com/search?term=away&media=music&limit=50")
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
        console.log(result);
      }
    )
    .then(() => {
      res.status(201).json(result);
    });
};

let users = [];
const register = (req, res) => {
  if (req.body.name && req.body.email && req.body.name && req.body.password) {
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    console.log(users);
    res
      .status(200)
      .json({ status: true, id: Date.now().toString(), name: req.body.name });
  }
  res.status(200).json({ status: false, resp: "Please enter all fields" });
};

const login = (req, res) => {
  if (users.length > 0) {
    users.find((user) => {
      if (user.email == req.body.email && user.password == req.body.password) {
        res.status(200).json({ status: true, usrName: user.name });
      } else {
        res
          .status(200)
          .json({ status: false, respLog: "cxv Email or Password" });
        console.log(false);
      }
    });
  } else {
    res.status(200).json({ status: false, respLog: "wer Email or Password" });
    console.log(false);
  }
  console.log(users);
};

let favourites = [];
fs.readFile("./db/favourites.json", (err, data) => {
  if (err) {
    console.log(err);
    return err;
  } else {
    favourites = JSON.parse(data.toString());
  }
});
const createFavourite = (fav) => {
  fs.writeFile("./db/favourites.json", JSON.stringify(fav), (err) => {
    if (err) {
      console.log(err);
      return err;
    } else {
      // console.log("wrote in json");
    }
  });
};



const getFavourite = (req, res) => {
  console.log(favourites);
  res.status(200).json(favourites);
};


const addToFav = async (req, res) => {
  const { id, media, term } = req.params;

  const response = await axios.get(
    `https://itunes.apple.com/search?term=${term}&media=${media}`
  );
  let myItem = response.data.results.find((item) => {
    return Number(id) === item.trackId;
  });

  let alreadyHave = favourites.find((item) => {
    return Number(id) === item.trackId;
  });
  console.log(favourites.length);
  if (alreadyHave) {
    console.log("should be removed");
    let index = favourites.indexOf(alreadyHave);
    favourites.splice(index, 1);
    createFavourite(favourites);
    res.status(200).json("file removed from favourite");
  }else if (myItem) {
    console.log("should be added");
    favourites.push(myItem);
    createFavourite(favourites);
    res.status(201).json("data added to favourite");
  }
  // await axios.get(URL + `?term=${term}&media=${media}`).then((data) => {
  // const results = await axios.get(
  //   "https://itunes.apple.com/search?term=all&media=all"
  // );
  // //    console.log( results.data.results);
  // let found = fav.find((item) => {
  //   return id == item.trackId;
  // });
  // let movie = results.data.results.find((item) => {
  //   return id == item.trackId;
  // });
  // if (found) {
  //   res.status(200).json("already exist");
  // } else {
  //   if (movie) {
  //     fav.push(movie);
  //     createFav(fav);
  //   }
  // }
};

module.exports = {
  getAllMovies,
  searchMovie,
  register,
  login,
  getAllMusic,
  addToFav,
  getFavourite,
};
