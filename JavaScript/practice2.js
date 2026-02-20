// let password = prompt("Enter your new password");
// let newpass =  password.trim();
// console.log(newpass)
// let n  = "Adnan"
// console.log(n.slice(2));
// let msg = "ilovecoding";
// let msg2= msg.replace('o','x');
// console.log(msg2);
// console.log(msg2.repeat(2));

// let n= prompt("Enter your number")
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// for(let i=1 ;i<=3;i++){
//     console.log(`outer loop ${i}`)
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// let i = 5;
// while(i>0){
//     console.log(i);
//     i--;
// }


// let favorite  = "Avatar"
// for(let i = 0;  i>=0; i++ ){
//     movie = prompt("enter a movie name");
//     if(movie == favorite){
//         alert("success");
//         break;
//     }
// }
//----------------------------------------------------------
// const  favorite ="Avatar"; 
// let guess = prompt("Guess the movie");
// while((guess!=favorite) && (guess != "quit")){
//    // console.log("wrong");
//     guess = prompt("wrong guess try again");
// }  
// if(guess == favorite){
//     console.log("Congrats");
// }else{
//     console.log("you quit");
// }
//---------------------------------------------------------------------
let heroes = [["superman" , "batman" ,"wonder woman"] , ["spiderman","ironman","thor"]];

for(arr of heroes){
    for(movie of arr){
        console.log(movie);
    }
}
