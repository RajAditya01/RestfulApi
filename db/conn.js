const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:2717/students-api")
  .then(() => {
    console.log("Connection successful !!");
  })
  .catch((e) => {
    console.log("Not connected");
  });

module.exports = mongoose.connection; // Export the Mongoose connection object
