const movieService = require("../services/movieService");

movieCtrl = {};

movieCtrl.getMovies = async (req, res) => {
  const movies = new movieService({
    point: "discover",
    sortBy: "popularity.desc",
    page: 1
  });
  const data = await movies.getMovies();
  res.json(data);
};

movieCtrl.getMovie = async (req, res) => {
  const moveId = req.params.id;
  const movie = new movieService({ point: "movie" });
  const data = await movie.getMovie(moveId);
  res.json(data);
};

module.exports = movieCtrl;
