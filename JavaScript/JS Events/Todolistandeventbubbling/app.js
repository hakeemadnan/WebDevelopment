// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// })
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for (li of lis){
//     li.addEventListener("click",function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }

//todo list 
let btn = document.querySelector("button");
let ul =document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText =inp.value;
    
    let delbtn = document.createElement("button");
    delbtn.innerText ="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);


    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";
})
//event delegation
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
    console.log(event.target.nodeName);
})



//this does not work for the new elements that are added 
// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         // console.log(par);
//         par.remove();
//         console.log("task deleted");

//     })
// }