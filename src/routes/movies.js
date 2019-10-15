const { Router } = require("express");
const router = Router();

const { getMovies, getMovie } = require("../controllers/movie.controller");

router.route("/").get(getMovies);
router.route("/:id").get(getMovie);

module.exports = router;
