const mongoose = require('mongoose');
const {Schema} = mongoose;
main().then(() => console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const orderSchema = new Schema({
    item:String,
    price:Number,
});
//one to many 
const customerSchema =  new Schema({
    name: String,
    orders :[{
        type: Schema.Types.ObjectId,
        ref :"Order"
    }]
})
const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer", customerSchema);
// const addCustomer = async ()=>{
//     let cust1 = new customer({
//         name: "Albert"
//     });
//     let order1 =await Order.findOne({item:"chips"});
//     let order2 =await Order.findOne({item:"chocolate"});
//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result =  await cust1.save();
//     console.log(result);
// }

// addCustomer();
const findCustomer = async()=>{
    let result =   await Customer.find({}).populate("orders");
    // console.log(result);
    console.log(result[0]);
}
findCustomer();
// const addOrders = async ()=> {
//     let res= await Order.insertMany([
//         {item:"samosa",price:12},
//         {item:"chips",price:20},
//         {item:"chocolate",price:40},
//     ]);
//     console.log(res)
// }

// addOrders();