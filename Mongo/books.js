const mongoose =require("mongoose");
main().then(() =>{
    console.log("connection succesfull")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//db schema
const BookSchema = new mongoose.Schema({
    Title :{
        type : String,
        required : true,
        maxlength :20
    },
    author:{
        type:String
    },
    price:{
        type:Number,
        min :[10,"price is too low for selling"]
    },
    discount :{
        type :Number,
        default :0,
    },
    genre:[String],
    category :{
        type: String,
        enum :["fiction","non-fiction"],
    }
});

const Book = new mongoose.model("Book",BookSchema);

// let book1 = new Book({
//     Title :"Find yourself",
//     author :"semo gasun",
//     price :4002,
//     discount:41,
//     category:"non-fiction"
// });
// book1.save()
// .then((res) =>{
//     console.log(res);
// })

Book.findByIdAndUpdate("69af85e011a04188651d629f",{price : -400},{runValidators :true}).then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err.errors.price.properties.message);
})