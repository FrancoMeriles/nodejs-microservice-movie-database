const { Router } = require("express");
const router = Router();

const { searchMovie } = require("../controllers/search.controller");

router.route("/").get(searchMovie);

module.exports = router;
