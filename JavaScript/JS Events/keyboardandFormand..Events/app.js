// let input = document.querySelector("input");

// input.addEventListener("keydown",function(event){
//     console.log(event.key);
//     console.log(event);
//     // console.log(event.code);
//     // console.log("key was pressed")
//     if(event.code == "KeyU"){
//         console.log("moves forward");
//     }else if(event.code == "KeyD"){
//         console.log("moves down");
//     }else if(event.code == "KeyL"){
//         console.log("moves left");
//     }else if(event.code == "KeyR"){
//         console.log("moves Right");
//     }
// });



//form events
// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
    //  event.preventDefault();
//     console.dir(form)
//     let user = this.elements[0];
//     let pass = this.elements[1];
//     console.log("username: ",user.value);
//     console.log("password : ",pass.value);
//  });
// let user = document.querySelector("#user");
// //change event
// user.addEventListener("change",function(){
//     console.log("change event");
//     console.log("final value :" ,this.value);
// });
// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value :" ,this.value);
// })


//text editor
let input= document.querySelector("#text");
let p = document.querySelector("p")
input.addEventListener("input" ,function(){
    console.log(input.value);
    p.innerText = input.value;
})
