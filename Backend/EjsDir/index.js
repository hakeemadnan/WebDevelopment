const express = require("express");
const app =express();
const path = require("path");
const port =8080;
app.use(express.static(path.join(__dirname,"public/js")));
app.use(express.static(path.join(__dirname,"public/css")));

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    // console.log("you are on the root path")
    res.render("home.ejs");
});
app.get("/hello",(req,res)=>{
    // console.log("you are on the root path")
    res.send("hello");
})

app.get("/rolldice",(req,res)=>{
    // res.send("Hello to roll the dice")
    let diceVal = Math.floor(Math.random()*6) +1;
    res.render("rolldice.ejs",{diceVal})
})

// instagram ejs
app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json")
    const data = instaData[username];
   if(data){
    res.render("insta.ejs",{data});
   }
   else{
    res.render("error.ejs")
   }
})