// function hello(){
//     console.log("inside hello")
//     console.log("hello");
// }
// function demo(){
//     console.log("inside demo calling hello fxn")
//     hello();
// }

// console.log("calling demo");
// demo();
// console.log("calling finished")

// function one(){
//     return 1;
// }
// function two(){
//     return one() +  one();
// }
// function three(){
//     let ans=  two() + one();
//     console.log(ans);
// }

// three();

// callback hell
h2= document.querySelector("h2");

// function  changeColor(color,delay,nextColorChange){
//     setTimeout(() => {
//         h2.style.color=color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("orange",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("brown",1000)
//             });
//         });
//     });
// });
//promise version
function  changeColor(color,delay){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h2.style.color=color;
            console.log(`color changed to ${color}!`)
            resolve("color changed");
        }, delay);
    })
}

async function Change(){
   try{
    await changeColor("red",1000);
    await changeColor("yellow",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
    await changeColor("orange",1000);
   }catch(err){
    console.log("error caught");
    console.log(err);
   }
   let a=5;
   console.log(a);
   console.log(" new number = ", a+3);
}
// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was compeleted");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange color was compeleted");
//     return changeColor("green",1000);
// })
// .then(()=>{
//     console.log("green color was compeleted");
//     return changeColor("yellow",1000);
// }).then(()=>{
//     console.log("red color was compeleted");
//     return changeColor("blue",1000);
// }).then(()=>{
//     console.log("last color changed");
// });
//callback nesting -> call back hell

//settting up promises this is the call back hell
// function saveToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10) +1;
//     console.log(internetSpeed);
//     if(internetSpeed > 4 ){
//         success();
//     }else{
//        failure();
//     }
// }
// saveToDb("this is my data",()=>{
//     console.log("success :your data was saved");
//     saveToDb("hello world",()=>{
//         console.log("success2: data2 saved");
//         saveToDb("this is the 3rd batch of data",()=>{
//             console.log("success3: data3 saved");
//         },()=>{
//             console.log("failure3: weak connection");
//         });
//     },()=>{
//         console.log("failur2: weak connection");
//     });
// },
// ()=>{
//     console.log("failure : weak connection. data not saved");
// }
// )

//promises
// function saveToDb(data){
//     return new Promise((resolve,reject) =>{
//         let internetSpeed = Math.floor(Math.random()*10) +1;
//         console.log(internetSpeed);
//         if(internetSpeed >4){
//             resolve("Sucess : data was saved ");
//         }else{
//             reject("Failure : data not saved");
//         }

//     });
// }

// saveToDb("data :we are here")
//     .then((result)=>{
//         console.log(" data 1 saved. promise was resolved");
//         console.log(result);
//         //here we are not printing the promise object but rather telling is promised fullfiled or not 
//         return saveToDb("helow to the world ");
//     })
//     .then((result)=>{
//         console.log("data 2 was saved .promised was resolved");
//         console.log(result);
//         return saveToDb("this is the third message");
//     })
//     .then((result)=>{
//         console.log("data 3 was saved");
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log("promise was rejected");
//         console.log(error);
//     });


// async function greet(){
//     // throw "some random error";
//     return "hello";
// }

// greet()
// .then((result) =>{
//     console.log("promise was resolved");
//     console.log("result was : ",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err : ", err)
// });


// let demo = async () =>{
//     return 5;
// };

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let num =Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
    
// }
// async function demo(){
//     await getNum();
//     await getNum();
//     getNum();
// }