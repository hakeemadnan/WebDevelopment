// let smallimages = document.getElementsByClassName("oldImg")

// for(let i =0;i<smallimages.length;i++){
//     smallimages[i].src = "assets/spiderman_img.png";
//     console.log(`the img number ${i} changed`);
// }
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll(".oldImg"));

//let links = document.querySelectorAll(".box a");
// for(let i=0;i<links.length;i++){
//     links[i].style.color ="green";
// }
// for(link of links){
//     link.style.color = "red";//inline property
// }


let para = document.createElement("p")
para.innerText = "hey i am here"
para.style.color = "red"

let body = document.querySelector("body");
body.append(para)

let h3 = document.createElement("h3");
h3.innerText= "I am blue h3";
h3.style.color = "blue";
document.querySelector("body").appendChild(h3)

let newdiv =document.createElement("div");
newdiv.classList.add("newdiv");
body.prepend(newdiv)
let h1 =document.createElement("h1");
h1.innerText ="I'm in a div";
newdiv.appendChild(h1);

let p = document.createElement("p");
p.innerText ="I am also in the div";
newdiv.appendChild(p);
























