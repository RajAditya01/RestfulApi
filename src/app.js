const express = require("express");
const app = express();
const port= process.env.PORT || 8000;

app.post("/students", (req, res)=>{
    res.send("hello from the other side")
})

app.listen(port, ()=>{
    console.log(`connection is setup at ${port}`);
})