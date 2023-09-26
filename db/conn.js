const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:2717/students-api").then(()=>{
    console.log("connection sucessfull !!");
}).catch((e)=>{
    console.log("Not connected");
});

module.exports = 'conn';