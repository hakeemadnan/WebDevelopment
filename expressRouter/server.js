const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts =require("./routes/post.js")
// const cookieParser = require("cookie-parser")

const session = require("express-session");

// app.use(cookieParser("secretcode"));



// app.get("/getsignedcookies",(req,res) =>{
//     res.cookie("made-in" ,"India",{signed: true})
//     res.send("signed cookie sent");
// })
// app.get("/verify",(req,res) =>{
//     console.log("simple cookies :", req.cookies)
//     console.log("signed cookies : " ,req.signedCookies); //it gets you signed cookies
//     res.send("verified or not verfied");
// })
// app.get("/getcookies",(req,res) =>{
//     res.cookie("name","adnan");
//     res.cookie("greet","Asalamualikum")
//     res.send("sent you somme cookies!")
// })
// app.get("/greet",(req,res) =>{
//     let {name = "anonymous"} = req.cookies;
//     res.send(`hi ,${name}`);
// })


// //root 
// app.get("/",(req,res) =>{
//     console.dir(req.cookies);
//     res.send("Hi, I am root ");
// })
// //users route
// app.use("/users",users);

// //posts router
// app.use("/posts",posts);

//express-session
app.use(session({secret:"mysupersecretstring",resave :false,saveUninitialized:true,}));

// app.get("/test",(req,res) =>{
//     res.send("test succesfull");
// })
app.get("/reqcount",(req,res) =>{
    if(req.session.count){
        req.session.count++;
    }else{
    req.session.count =1
    }
    res.send(`you sent a request ${req.session.count} times`);
})
app.listen(3000, () => {
    console.log("Server running");
  });

