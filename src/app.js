const express = require("express");
const cors = require("cors");

const app = express();

//settings
app.set("port", 4000);
app.set("base_url", "/api");

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use(`${app.get("base_url")}/movies`, require("./routes/movies"));
app.use(`${app.get("base_url")}/search`, require("./routes/search"));

module.exports = app;
