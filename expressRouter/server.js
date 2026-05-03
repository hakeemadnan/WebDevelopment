const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts =require("./routes/post.js")
//root 
app.get("/",(req,res) =>{
    res.send("Hi, I am root ");
})
//users route
app.use("/users",users);

//posts router
app.use("/posts",posts);



