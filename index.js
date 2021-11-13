const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");

dotenv.config();

// router
const movieRouter = require("./routers/routes/moviesRoute");
const authRoute = require("./routers/routes/authRoute");
const favouriteRouter = require("./routers/routes/favouriteRoute");

const app = express();
app.use(cors());
app.use(helmet());

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

app.use("/", movieRouter);
app.use("/", authRoute);
app.use("/", favouriteRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
