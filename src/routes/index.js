const { Router } = require("express");
const router = Router();

//routes
router.use("/movies", require("./movies.route"));
router.use("/search", require("./search.route"));
router.use("/tv", require("./tv.route"));

module.exports = router;
