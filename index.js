const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

// router
const movieRouter = require("./routers/routes/moviesRoute");

const app = express();
app.use(cors())

app.use(express.json());

// const appMiddleware = (req, res, next) => {
//   console.log("appMiddleware");
//   next();
// };
// app.use(appMiddleware);

// app.use(morgan("dev"));

// const movieMiddleware = (req, res, next) => {
//   console.log("movies");
//   next();
// };

app.use("/movies", movieRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});