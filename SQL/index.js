const { faker } =require('@faker-js/faker');
const mysql = require('mysql2');

const express = require('express');

const app = express();

const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended : true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Rehana@098',
  });


//   let q = "SHOW TABLES";
// try{
//   connection.query(q,(err,result) =>{
//     if(err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
//   });
// }catch(err){
//   console.log(err);
// }

//inserting new data manually
// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let users = [["124","124_Acv","avv@gmail.com","9s_dfi"],["125","125_Acs","acs@gmail.com","99_sfi"]];
// try{
//   connection.query(q,[users],(err,result) =>{
//     if(err) throw err;
//     console.log(result);
//   });
// }catch(err){
//   console.log(err);
// }


//insert in bulk

let getRandomUser=()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// console.log(getRandomUser());

// let q = "INSERT INTO user (id,username,email,password) VALUES ?";
// let data = [];
// for(let i=1;i<=100;i++){
//   data.push(getRandomUser());
// }
// try{
//   connection.query(q,[data],(err,result) =>{
//     if(err) throw err;
//     console.log(result);
//   });
// }catch(err){
//   console.log(err);
// }

//home page
app.get("/",(req,res) =>{
  let q =`SELECT COUNT(*) FROM user`;
  try{
      connection.query(q,(err,result) =>{
        if(err) throw err;
        let count = result[0]["COUNT(*)"];
        res.render("home.ejs",{count});
      });
    }catch(err){
      console.log(err);
      res.send(`Error in the Db ${err}`);
    }
  // res.send("Welcome to home page");
});


app.listen("8080",()=>{
  console.log("server is listening");
})

//users page

app.get("/user",(req,res) =>{
  let q= `SELECT *  FROM user`;
  try{
    connection.query(q,(err,users) =>{
      if(err) throw err;
      // console.log(result);
       res.render("showusers.ejs",{users});
    });
  }catch(err){
    console.log(err);
    res.send(`Error in the Db ${err}`);
  }
});


//edit route
app.get("/user/:id/edit",(req,res) =>{
  let {id} = req.params;
  let q =`SELECT * FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result) =>{
      if(err) throw err;
      let user=result[0];
      res.render("edit.ejs",{user});
    });
  }catch(err){
    console.log(err);
    res.send(`Error in the Db ${err}`);
  }
})

//update route db
app.patch("/user/:id",(req,res) =>{
  let {id} = req.params;
  let{password:formpass,username:newUsername} =req.body;
  let q =`SELECT * FROM user WHERE id ='${id}'`;
  try{
    connection.query(q,(err,result) =>{
      if(err) throw err;
      let user=result[0];
      if(formpass != user.password){
        res.send("Wrong password");
      }else{
        let q2=`UPDATE user SET username ='${newUsername}' WHERE id='${id}'`;
        connection.query(q2,(err,result) =>{
          if(err) throw err;
          res.redirect("/user");
        })
      }
    });
  }catch(err){
    console.log(err);
    res.send(`Error in the Db ${err}`);
  }

});