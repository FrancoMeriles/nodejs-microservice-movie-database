const { Schema, model } = require("mongoose");

const tvSchema = new Schema({
  name: {
    type: String,
    required: [true, "name required"]
  },
  overview: {
    type: String,
    required: [true, "overview required"]
  }
});

module.exports = model("tv", tvSchema);
