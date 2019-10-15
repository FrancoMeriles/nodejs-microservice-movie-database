const movieService = require("../services/movieService");

searchCtrl = {};

searchCtrl.searchMovie = async (req, res) => {
  const querySearch = req.query.q;
  const searchMovie = new movieService({
    point: "search",
    language: "en-US",
    page: 1
  });
  const data = await searchMovie.searchMovie(querySearch);
  res.json(data);
};

module.exports = searchCtrl;
