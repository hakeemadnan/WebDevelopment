// console.log("Hello java")
// console.log("apna college")
// let a =23;
// let b=34;
// console.log("Sum is " ,a+b);
// //this is a comment 
// let s = 39;
// let t =34;
// console.log(`total is ${s+t}`);
let a = 10;
let b = 5;

// Arithmetic operators
let sum = a + b;      // 15
let diff = a - b;     // 5
let prod = a * b;     // 50
let div = a / b;      // 2

// Unary operators
a++;   // a becomes 11
b--;   // b becomes 4

// Assignment operators
a += 2;   // a = a + 2 → 13
b /= 2;   // b = b / 2 → 2

// Comparison operators
let isEqual = (a == b);      // false
let isGreater = (a > b);    // true

// Logical operators
let logicalResult = (a > b) && (b > 0);  // true

console.log(sum, diff, prod, div);
console.log(a, b);
console.log(isEqual, isGreater);
console.log(logicalResult);

//conditional statements
console.log("before my if statements ");
let age=9;
if(age>=23){
    console.log("you can vote");
}
console.log("after my if statement");


// let size = "XL";
// if(size ==="XL"){
//     console.log("Rs. 250");
// }else if(size ==="M"){
//     console.log("Rs. 100");
// }else if(size ==="S"){
//     console.log("Rs. 50");
// }
// else if(size === "X"){
//     console.log("Rs. 200");
// }else{
//     console.log("not a size")
// }
//-------
let string= "ahfs";
if(string[0] =='a' && string.length > 3){
    console.log("String is good");
}else{
    console.log("String is bad");
}
//-----------
let color = "red";
switch(color){
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("Go");
        break;
    default :
        console.log("broken light")
}
// alert("the local variable is here")
// prompt("enter your name :  ")
console.error("The password is wrong");
console.warn("Warning");
let fname =  prompt("enter your firstname");
let lname =  prompt("enter your  last name");   
let msg =  "Welcome  " + fname +" " + lname + "!";
alert(msg);
