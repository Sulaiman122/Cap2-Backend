const axios = require("axios");
const fs = require("fs");




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
  console.log(media);
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
};

module.exports = {
  addToFav,
  getFavourite,
};
