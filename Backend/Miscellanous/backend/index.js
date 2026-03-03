const express =require("express")
const app =express();
const port =8080;

app.use(express.urlencoded({extended: true})); //for all request
app.use(express.json());//for json decoding
 //these parse the json and urlencoded data 
app.listen(port,()=>{
    console.log(`Listening to the request on ${port}`);

})

app.get("/register",(req,res)=>{
    let {user,password} =req.query;
    res.send(`Standard GET response welcome ${user}`)
});

app.post("/register",(req,res)=>{
    // console.log(req.body); //undefined until we use the app.use lencode thing
    let {user,password} = req.body;
    res.send(`Standard POST response .Welcome to ${user} `)
});