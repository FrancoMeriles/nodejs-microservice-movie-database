const movieService = require("../services/movie.service");
const schema = require("../validation/movie");
const validateJoi = require("../validation/validateJoi");

movieCtrl = {};

movieCtrl.getMovies = async (req, res) => {
  const movies = new movieService({
    point: "discover",
    sortBy: "popularity.desc",
    page: 1
  });
  const data = await movies.getMovies();
  res.json({ data, name, email });
};

movieCtrl.getMovie = async (req, res) => {
  const moveId = req.params.id;
  const movie = new movieService({ point: "movie" });
  const data = await movie.getMovie(moveId);
  res.json(data);
};

movieCtrl.createMovie = async (req, res) => {
  const { name, email } = req.body;
  // const { error, value } = schema.validate(req.body);
  // if (error) {
  //   const errors = error.details.map(error => error.message).join(" - ");
  //   res.status(400).json({ error: true, errors, value });
  // }
  // res.status(200).json({ error: false, req: req.body });

  const { error, messages } = await validateJoi(schema, { name, email });

  error
    ? res.status(400).json({ error: true, messages })
    : res.status(200).json({ error: false, values: { name, email } });

  // try {
  //   await schema.validateAsync(req.body);
  //   res.status(200).json({ error: false, req: req.body });
  // } catch (err) {
  //   const errors = err.details.map(error => error.message).join(" - ");
  //   res.status(400).json({ error: true, errors });
  // }
};

module.exports = movieCtrl;
