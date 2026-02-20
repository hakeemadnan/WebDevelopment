//*this key word
// const student= {
//     name : "Adnan",
//     age :23,
//     eng:98,math:98,sci : 96,
//     getAvg(){
//         let avg = (this.eng+this.math+this.sci)/3
//         console.log(avg);
//     }
// }

// function anyt(){
//     console.log(this);
// }

//*try and catch
// console.log("hello")
// console.log("hello")
// try{console.log(a);
// }catch(err){
//     console.log("the server is down");
//     console.log(err);
// }
// console.log("hello")
// console.log("hello")


//*arrow functions
// const hello = () =>{
//     console.log("hello");
// }
// const sum = (a,b) =>{
//     a+b
// };
//for only returning no calculation only returning there is explicit returning
// const sq = n =>  n*n;
// const pow = (a,n) => a**n;


//settimeout function
// console.log("hello there");

// setTimeout(() =>{
//     console.log("anything");
// },4200)
// console.log("write");

//*setInterval
// console.log("hello there");
// let id =setInterval(() =>{
//     console.log("Welcome");
// },2000)
// console.log(id);
// let id2 = setInterval(() =>{
//     console.log("to the jungle");
// },3000)
// console.log(id2);


//*this with arrow function and normal function
const student = {
    name : "adnan",
    rollno: 56, 
    marks:56,
    prop: this, //global scope
    getName : function(){
        console.log(this); // object scope like the student
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent scope -> window
        return this.marks;
    },
    getinfor1 : function(){
        setTimeout(() => {
            console.log(this); //student
        }, 2000);
    },
    getinfo2 :  function(){
        setTimeout(function() {
            console.log(this); //window 
        }, 2000);
    }

};

//question
const  sqn = n => n*n;

let id=setInterval(() => {
    console.log("hello hello ");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);