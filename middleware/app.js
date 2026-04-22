const express = require('express');
const app = express();
const ExpressError = require('./ExpressError')
// app.use( (req,res)=>{
//     if (req.path === "/favicon.ico") return res.end();
//     let {query} = req.query;
//     console.log(query);
//     // console.log("PATH:", req.path);
//     console.log("hi, i am middleware");
//     res.send("middleware finished");
// }); //this is send response to every request and wont be able to reach the other paths

// app.use((req,res,next) =>{
//     console.log('I am a first middle ware');
//     next();
// })

// app.use((req,res,next) =>{
//     console.log('I am a second middle ware');
//     next();
// })
// app.use((req,res,next) =>{
//     // console.log(req); to check req object
//    req.time = new Date(Date.now()).toString(); 
//    console.log(req.method,req.hostname,req.path,req.time); 
//    next();
// });
app.use("/random",(req,res,next) =>{
    console.log("only for random");
    next(); 
})
// app.use("/api",(req,res,next) =>{
//     let {token} = req.query;
//     if(token == "giveaccess"){
//         next();
//     }
//     res.send(" ACCESS DENIED");
// })
const checkToken =(req,res,next) =>{
        let {token} = req.query;
        if(token == "giveaccess"){
            next();
        }
        // res.send(" ACCESS DENIED");
        throw new ExpressError(401,"ACCESS DENIED")
    };

// app.get("/err",(req,res) =>{
//     abcd=acbd;
// });

app.get("/api",checkToken,(req,res) =>{
    res.send("Data");

})
app.use((err,req,res,next) =>{
    console.log("---------ERROR----------");
    res.send(err);
    // next();//next non error handling middleware
  //  next(err); //calling the next err handling middleware
})
app.get("/",(req,res)=>{
    res.send("Hi , i am root");
})

app.get("/random",(req,res) =>{
    res.send("This is a random page")
})

//404
app.use((req,res)=>{
    res.send("page not found");
})
app.listen(8080,() =>{
    console.log('server listening to port 8080');
});

