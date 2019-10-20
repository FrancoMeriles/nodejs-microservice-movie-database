const { Router } = require("express");
const router = Router();

const {
  getMovies,
  getMovie,
  createMovie
} = require("../controllers/movie.controller");

router
  .route("/")
  .get(getMovies)
  .post(createMovie);
router.route("/:id").get(getMovie);

module.exports = router;
