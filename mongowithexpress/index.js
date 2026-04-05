const express = require('express');
const app =express();
const mongoose =require("mongoose");
const Chat  = require("./models/chats.js");
const path = require("path");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({extended:true }));

const methodOverride = require("method-override");

app.use(methodOverride("_method"));
//this is mongoose code for connecting it to the server
// let chat1 = new Chat({
//     from : "Jaha",
//     to : "saha",
//     message : "send me the notes",
//     created_at: new Date()
// });
// chat1.save().then((res) =>{
//     console.log(res);
// })
main().then(() =>{
    console.log("connection succesfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
app.listen(8080,()=>{
    console.log("server is lisstening on port 8080");
})

app.get("/",(req,res)=>{
    res.send("root is working");
})


//index route 

app.get("/chats" ,async (req,res) =>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs",{chats})

})
//new route
app.get("/chats/new",(req,res) =>{
    res.render("new.ejs")
})

//create route
app.post("/chats",(req,res) =>{
    console.log(req.body);
    let {from, to, message} =req.body;
    let newChat = new Chat({
        from : from,
        to:to,
        message:message,
        created_at:new Date()
    });
    newChat.save()
    .then((res) =>{
        console.log("saved the chat");
    })
    .catch((err) =>{
        console.log(err);
    });
    res.redirect("/chats");
})

//edit route
app.get("/chats/:id/edit", async (req,res) =>{
    let {id} =req.params;
    let chat = await Chat.findById(id);

    res.render("edit.ejs",{chat})
})

//update route
app.put("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let{message : newMsg} =req.body;
   // console.log(newMsg);
    let UpdateChat = await Chat.findByIdAndUpdate(
        id,
        {message:newMsg},
        {runValidators :true,
        new:true}
    );
    console.log(UpdateChat);
    res.redirect("/chats");
});

//destroy route

app.delete("/chats/:id", async (req,res) =>{
    let{id} =req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})