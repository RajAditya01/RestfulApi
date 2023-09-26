// conn.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:2717/students-api",{
  userCreateIndex:true,
  userNewUrlParser:true,
  useUnifiedTopology:true
}).then(() => {
    console.log("Connection successful !!");
  })
  .catch((e) => {
    console.log("Not connected");
    //console.log(e);
  });

module.exports = mongoose.connection; // Export the Mongoose connection object
