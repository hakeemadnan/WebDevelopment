const mongoose =require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main().then(() =>{
    console.log("connection succesfull")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const userSchema = new mongoose.Schema({
    name :String,
    email:String,
    age:Number,
});

const User =  mongoose.model("User",userSchema);
// const employee = mongoose.model("employee",userSchema);

// const user2= new User({
//     name:"khan",
//     email :"khan@gmail.com",
//     age : 34,
// })

// user2.save().then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })

// User.insertMany([
//     {name:"gul",email :"gul@gmail.com",age : 34},
//     {name:"sul",email :"sul@gmail.com",age : 25,},
//     {name:"dul",email :"dul@gmail.com",age : 20,},
// ]).then((res)=>{
//     console.log(res);
// });

// ---//find
// User.find({age :{$gt:40}}).then((res)=>{
//     console.log(res); //also can get the name use index and .methods
// }).catch((err) =>{
//     console.log(err);
// })

//this returns metadata like thing not the actual data but the acknowledgement that the data is updated 
// User.updateOne({name :"gul"},{age:120})
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//to update and see the update value we use this 
// User.findOneAndUpdate({name :"gul"},{age:42},{new:true})
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndUpdate('69af797e9acfd19e85fb6a47',{age:89},{new:true})
// .then((res) =>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//delete
// User.deleteOne({name :"sul"}).then((res)=>{
//     console.log(res);
// });

User.deleteMany({age: {$lt:40}}).then((res)=>{
    console.log(res);
});