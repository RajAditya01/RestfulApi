// const express = require("express");
// require("./db/conn");
// const app = express();
// const port= process.env.PORT || 8000;

// // create a new student
// app.post("/students", (req, res)=>{
//     res.send("hello from the other side")
// })

// app.listen(port, ()=>{
//     console.log(`connection is setup at ${port}`);
// })




const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a Mongoose Schema for students
const studentSchema = new mongoose.Schema({
  // Define your student schema here
});

// Create a Mongoose Model
const Student = mongoose.model("Student", studentSchema);

// Create a new student
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body); // Assuming the request body contains student data
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose
  .connect("mongodb://localhost:27017/students-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connection successful!");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
