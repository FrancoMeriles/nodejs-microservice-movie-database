const { Router } = require("express");
const router = Router();

const {
  getTvs,
  getTv,
  createTv,
  deleteTv,
  updateTv
} = require("../controllers/tv.controller");

router
  .route("/")
  .get(getTvs)
  .post(createTv);

router
  .route("/:id")
  .get(getTv)
  .delete(deleteTv)
  .put(updateTv);

module.exports = router;
