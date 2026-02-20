let gameSeq = [];
let userSeq =[];

let btns =["yellow","red","purple","green"];
let started = false;
let level = 0;

document.addEventListener("keypress" ,function(){
    if(started == false){
        console.log("game started");
        // level = -1;
        started = true;
        levelUp();
        let allbtns = document.querySelectorAll(".btn");
        for(btn of allbtns){
        btn.addEventListener("click",btnPress);
        }
    }
});

let h2 =document.querySelector("h2");

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300)
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //random button
    let randomIdx = Math.floor(Math.random()*4);
    let randColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randomIdx);
    // console.log(randColor)
    // console.log(randbtn)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkSeq(idx){
   // console.log("curr level ",level);
    // let idx = level -1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! your score was <b>${level}<b>  <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        },156);
        reset();
    }


}

function btnPress(){
    // console.log("btn was pressed ");
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
   // console.log(userColor);
    userSeq.push(userColor);

    checkSeq(userSeq.length - 1);
}
// let allbtns = document.querySelectorAll(".btn");

//  for(btn of allbtns){
//      btn.addEventListener("click",btnPress);
//  }



function reset(){
    started =false;
    gameSeq = [];
    userSeq =[]
    level =0;
    console.clear();
    console.log("Game Over. Try again");
}