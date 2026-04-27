const mongoose = require('mongoose');
const {Schema} = mongoose;
main().then(() => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// one to few 
const userSchema = new Schema({
    username:String,
    addressess: [
        {
            _id: false,
            location: String,
            city: String,
        },
    ],
});

const User  = mongoose.model("User",userSchema)

const addUsers = async() =>{
    let user1 = new User({
        username: "abraham",
        addressess: [
            {
                location:"221 baker street ",
                city : "London"
            }
        ]
    });
    user1.addressess.push({
        location: "p32 wallstreet", city: "London"
    })
    let result = await user1.save();
    console.log(result);
}

addUsers();