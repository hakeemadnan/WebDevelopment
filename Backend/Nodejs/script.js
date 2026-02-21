// let n =5 ;
// for(let i=0;i<n;i++){
//     console.log("hello", i);
// }
// let args = process.argv;
// for(let i=2;i<args.length;i++){
//     console.log("Hello ",args[i]);
// }
// console.log("done ");
// const someValue = require("./math");
// console.log(someValue);
// const mathobj = require("./math");
// console.log(mathobj);
// console.log(mathobj.sum(23,34));

// //-------/require
// const info = require("./fruits");
// console.log(info)
// console.log(info[0].name)
// console.log(info[1].color)

//---import modules
import  {generate} from "random-words";
import {sum} from "./math.js";
console.log(sum(1,2));
console.log(generate())