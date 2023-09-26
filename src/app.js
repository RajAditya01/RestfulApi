const express = require("express");
require("./db/conn");
const student= require("./models/student");
const app = express();
const port= process.env.PORT || 8000;

app.use(express.json());

// create a new student
app.post("/student", (req, res)=>{

    console.log(req.body);
    const user = new student(req.body)
    user.save().then(()=>{
        res.send(user);
    }).catch((e)=>{
        res.send(e);
    }) 

    res.send("hello from the other side")
})



app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})