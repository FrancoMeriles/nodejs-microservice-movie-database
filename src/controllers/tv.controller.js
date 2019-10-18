const Tv = require("../models/tv.model");

const tvCtrl = {};

tvCtrl.getTvs = async (req, res) => {
  const tv = await Tv.find();
  res.json(tv);
};

tvCtrl.createTv = async (req, res) => {
  const { name, overview } = req.body;
  const newTv = new Tv({
    name,
    overview
  });
  try {
    await newTv.save();
    res.status(200).json("Tv saved");
  } catch (err) {
    res.status(400).json({
      error: true,
      message: err.message
    });
  }
};

tvCtrl.getTv = async (req, res) => {
  try {
    const tv = await Tv.findById(req.params.id);
    res.json(tv);
  } catch (err) {
    res.status(400).json({
      error: true,
      message: err.message
    });
  }
};

tvCtrl.deleteTv = async (req, res) => {
  try {
    await Tv.findByIdAndDelete(req.params.id);
    res.json("Tv deleted");
  } catch (err) {
    res.status(400).json({
      error: true,
      message: err.message
    });
  }
};

tvCtrl.updateTv = async (req, res) => {
  try {
    const { name, overview } = req.body;
    await Tv.findByIdAndUpdate(req.params.id, {
      name,
      overview
    });
    res.json("Tv Updated");
  } catch (err) {
    res.status(400).json({
      error: true,
      message: err.message
    });
  }
};

module.exports = tvCtrl;
