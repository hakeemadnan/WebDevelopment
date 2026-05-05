const express = require("express");
const app = express();
const users = require("./routes/user.js")
const posts =require("./routes/post.js")
const flash = require("connect-flash");
// const cookieParser = require("cookie-parser")
const session = require("express-session");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
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

// // //posts router
// app.use("/posts",posts);

const sessionOptions = {secret:"mysupersecretstring",resave :false,saveUninitialized:true,};
//express-session
app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next) =>{
    res.locals.success = req.flash("successMsg");
    res.locals.error = req.flash("ErrorMsg");
    next()
})
app.get("/register",(req,res) =>{
    let {name = "annonymous"} = req.query;
    req.session.name = name;

    // console.log(req.session)
    if(name == "annonymous"){
        req.flash("ErrorMsg","user not registered");
    }else{
        req.flash("successMsg","user registered successfully");
    }
    res.redirect("/hello");
});


app.get("/hello",(req,res) =>{
    res.render("page.ejs", {name :req.session.name});
})

// app.get("/test",(req,res) =>{
//     res.send("test succesfull");
// })
// app.get("/reqcount",(req,res) =>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//     req.session.count =1
//     }
//     res.send(`you sent a request ${req.session.count} times`);
// })


app.listen(3000, () => {
    console.log("Server running");
  });

