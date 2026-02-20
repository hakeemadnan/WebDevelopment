let  todo = [];
let  req = prompt("please enter your Request");
while(true){
    if(req == "quit"){
        console.log("Quiting the app");
        break;
    }
    if(req == "list"){
        console.log("---------------");
        for(let i=0;i<todo.length ;i++){
            console.log(i,todo[i]);
        }
        console.log("------------")
    }
    else if(req == "add"){
        let  task=  prompt("please enter the task that you want to add");
        todo.push(task);
        console.log("task added");
    }else if (req=="delete"){
        let idx = prompt("Please enter the index you want to delete");
        todo.splice(idx,1);
    }
    else if(req == "mark"){
        console.log("marked");
    }else{
        alert("Invalid input");
    }
    req = prompt("please enter your Request");
}