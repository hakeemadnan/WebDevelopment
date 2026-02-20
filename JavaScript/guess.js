const max = prompt("Enter the max number");
const random = Math.floor(Math.random()*max) + 1;

let guess  = prompt("Guess the number");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
        console.log("Congrats ! you are right random number is ", random);
        alert("Congrats the guess was right on the target");
        break;
    }else if(guess > random){
        guess = prompt("Hint : your guess was a bit large than the random number ! try again");
    }else{
        guess = prompt("Hint : your guess was a bit small than the random number . Try again")
    }
}