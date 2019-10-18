require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_MONGO, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Connection Established");
});

connection.on("reconnected", () => {
  console.log("Connection Reestablished");
});

connection.on("disconnected", () => {
  console.log("Connection Disconnected");
});
