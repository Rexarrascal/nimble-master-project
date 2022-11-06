const mongoose = require("mongoose");

module.exports = {
  database: "mongodb://localhost/nimble-project",
  secret: "password",
};

const connectionString =
  process.env.MONGODB_CONNECTION_STRING || module.exports.database;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log(`Connected to MongoDB!`);
});
