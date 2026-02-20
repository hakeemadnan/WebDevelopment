// let btns =  document.querySelectorAll("button");
// for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function(){
    //     console.log("you entered a button")
    // btn.addEventListener("click",sayHello);    
    // btn.addEventListener("click",sayName);    
//     btn.addEventListener("dblclick",function(){
//         console.log("double clicked");
//     });    

// }

// btn.onclick =function(){
//     alert("clicked");
// };
// function sayHello(){
//     alert("hello!");
// }

// function sayName(){
//     alert("your name");
// }
//-----------------
//activity
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3 = document.querySelector("h3");
//     let randomcolor = getRandomcolor();
//     h3.innerText = randomcolor;
//     let div =document.querySelector("div");
//     div.style.backgroundColor = randomcolor;
// });

// function getRandomcolor(){
//     let red =Math.floor(Math.random()*255);
//     let green =Math.floor(Math.random()*255);
//     let blue =Math.floor(Math.random()*255);
//     let color= `rgb(${red},${green},${blue})` ;
//     return color
// }


//-------------------------------------

// let p = document.querySelector("p");
// p.addEventListener("click",function(){
//     console.log("para was clicked")
// })

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside the box");
// })

//this keyword
// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     console.log(this);
// })

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor =" blue"
}

btn.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);





