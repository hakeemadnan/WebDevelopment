const express = require("express");
const app = express();
// console.dir(app)

let port =3000; //we can use 8080
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})

// //for any route
// app.use((req,res) =>{
//     // console.log(req)
//     console.log("request recieved");
//     // res.send("First Server")
//     // res.send({
//     //     name:"Adnan",
//     //     author : "True"
//     // })
//     let code  ="<h1>Fruits</h1> <ul><li>Apple</li><li>Grapes</li></ul>"
//     res.send(code);
// })

//app.get specific route

app.get("/",(req,res)=>{
    // console.log("You contacted the root path");
    res.send("Hello you have contacted the root path");
    
})

app.get("/apple",(req,res)=>{
    console.log("You contacted the apple path");
    res.send("You contacted the apple path");
    
});

app.get("/grapes",(req,res)=>{
    console.log("You contacted the grape path");
    res.send("You contacted the grapes path");
    
});
// app.get("/*",(req,res)=>{
//     res.send("This path does not exist");
    
// }); <=older version

// ----------
// app.get("/*any", (req, res) => {
//     res.send("This path does not exist");
// });
//we can also use post and other ...
app.get("/:username/:id",(req,res)=>{
    // console.log(req.params)
    let {username,id} =req.params;
    let html = `<h1>welcome to the account of @${username} with id ${id}</h1>`
    res.send(html)
})

app.get("/search",(req,res) =>{
    let {q} =req.query;
    if(!q){
        res.send(`<h1>No query Searched</h1>`)
    }
    res.send(`<h1>Search results for query : ${q}</h1>`);
})