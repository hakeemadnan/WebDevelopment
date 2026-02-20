// **foreach,map,filter

// let arr = [1,2,3,4,5]

// let print = function(el){
//     console.log(el);
// }
// let printar = (el) => console.log(el);

// arr.forEach(print)

// let arr =[{
//      name: "aman",
//      marks: 88,
//     },
//     {
//      name: "naman",
//      marks: 89,
//     },
//     {
//      name: "rajat",
//      marks: 75,
//     },
// ];
// arr.forEach((student)=>{ 
//     console.log(student)
// })

// let num =[1,2,3,4];
// let newarr = num.map((el) => {
//     return el*2;
// })

// let gpa = arr.map((el) => {
//         return el.marks/10;
// })
//-----------------
// let nums =[2,4,1,56,7,4,1,1,6,3];

// let even  = nums.filter((el) =>{
//     return (el%2 == 0);
// });


//---------Reduce method
// let nums = [1,2,23,5,6,7];
// let  finalval = nums.reduce((res,el) =>{
//     console.log(res);
//     return res+el;
// }) ;

//-------maximum array

// let arr = [1,2,6,4,8,41,6,1,35]
// let ans = arr.reduce((max,el) =>{
//     if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
// });

//-----Spread with array literals
// let arr = [1,2,6,4,8,41,6,1,35]
// Math.min(...arr)
// let arr1 =[1,2,5,56,3,4];
// let newarr = [...arr];
// let chars = [..."hello"]
// let odd = [1,3,5,7,9];
// let even =[2,4,6,8,10];
// let nums = [...even,...odd];


// //spread with object literals
// const data = {
//     email :"hakeem@gmail.com",
//     password : "sjkfsdlf",
// };
// const datacopy ={
//     ...data ,id:45
// }

// //array in objects
// arr = [1,32,3,46,4];
// obj ={...arr};
// objstring = {..."hello"}

//----------
//Rest 
// function sum(...args){
//     for(let i =0;i<args.length;i++){
//         console.log("you gave us ", args[i]);
//     }
// }
// //we use arguments here to get arguments but we cant use array functions on them as they are inbuilt collections so we use rest
// function min(a,b,c,d){
//     console.log(arguments); 
// }

// function sum(anyotherarglikeamsg,...args){
//     console.log(anyotherarglikeamsg);
//     return args.reduce((sm,el)=> sm+el);
// }


//--------Destructuring
let names =["heman","bure","brevis","stubs"];
let [winner,runnerup,...others]= names;
//destructuring in objects
const student ={
    name : "miller",
    regisn :1234666,
    subjects: ["hindi","urdu","math","astronomy"],
    username : "miller36",
    password : "abcd"
};

let {username:user,password:secret,city:place="kashmir"} =student;