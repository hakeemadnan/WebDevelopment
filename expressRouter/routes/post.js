const express = require("express")
const router = express.Router()
//POST
//index -  
router.get("/",(req,res) =>{
    res.send("GET for post");
})

//SHOW - 
router.get("/:id",(req,res) =>{
    res.send("GET for post id");
})
//DELETE - 
router.delete("/:id",(req,res) =>{
    res.send("DELETE for post id ")
})
// POST-
router.post("/",(req,res) =>{
    res.send("POST for posts")
})

module.exports =router