function printPoem(){
    console.log("baba black sheep what gonna wool");
    console.log("yes sir two bags full one for the master");
}

function dice(){
    console.log("The number is" , Math.floor(Math.random()*6)+1);
}
//dice();

//function with arguments
function printInfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}

// printInfo("adnan",24);

function avg(a,b,c){
    let avg =(a+b+c)/3;
    console.log(avg);
}

//multiplication table
function Table(num){
    for(let i=1;i<=10;i++){
        console.log(num*i);
    }
}

// Table(2);

function Sum(n){
    let s =0;
    for(let i=1;i<=n;i++){
        s+=i;
    }
    return s;
}
let str = ["hi","hello","bye","!"]
function Concatstr(str){
    let result ="";
    for(let i=0;i<str.length;i++){
        result += str[i];
    }
    return result;
}
// console.log(Concatstr(str))
function outerfunc(){
    let x= 5;
    let y =6;
    function innerfunc(){
        console.log(x);//lexical scope
    }

}
//hoisting
function outerfunc(){
    function innerfunc(){
        console.log(x);//lexical scope
    }
    let x= 5;
    let y =6;
    innerfunc();
}


// high order functions
function multipleGreet(func,n){
    for(let i=1 ;i<=n;i++){
        func();
    }
}
let greet =function(){
    console.log("Salam");
}
multipleGreet(greet, 10);


//
let odd =function(n){
    console.log(!(n%2 == 0));
}
let even = function(n){
    console.log(n%2==0);
}

function oddorevenfactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log((n%2 == 0));
        }
    }else{
        console.log("wrong request");
    }
}
let request ="odd";


//methods

const calculator ={
    num  : 55, //property
    add (a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a,b){
        return a * b;
    }
}