const express = require("express");
const router = express.Router();


//index -  users
router.get("/",(req,res) =>{
    res.send("GET for Showuser");
})
//users
//SHOW - users
router.get("/:id",(req,res) =>{
    res.send("GET for user id");
})
//DELETE - users
router.delete("/:id",(req,res) =>{
    res.send("DELETE for user id ")
})
// POST-users
router.post("/",(req,res) =>{
    res.send("POST for users")
})

module.exports = router