// let jsondata ='{"fact":"A cat\u2019s back is extremely flexible because it has up to 53 loosely fitting vertebrae. Humans only have 34.","length":106}';
// let validres = JSON.parse(jsondata);

// console.log(validres.fact);

// let student = {
//     name :"adnan",
//     location : "Kashmir"
// }
//we can use stringify to change this in json format


//---------------------------
//our first request
// let url ="https://catfact.ninja/fact";

// fetch(url)
//     .then((res)=>{
//         //console.log(res);
//         return res.json();
//         // res.json().then((data)=>{
//         //     console.log(data)
//         // });
//     })
//     .then((data) =>{
//         console.log("data1",data.fact);
//         return fetch(url);
//     })
//     .then((res2)=>{
//         //console.log(res2);
//         return res2.json();
//     })
//     .then((data2) =>{
//         console.log("data 2",data2.fact);
//     })
//     .catch((err)=>{
//         console.log("Error - err");
//     })

//use of await and async with fetch
//let url ="https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log("data 1 : ",data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log("data 2: ",data2.fact);
//     }
//     catch(e){
//         console.log("Error -",e);
//     }
//     console.log("we reached the end of the code lines")
// }
//---------------------------
//use of axios
//using to show catfacts and dog images
// let catbtn = document.querySelector("#catbtn");
// let dogbtn = document.querySelector("#dogbtn");
// let p = document.querySelector("#result");

// async function getfacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//        // p.innerText = fact;
//     }
//     catch(e){
//         console.log("error - ", e);
//         return "No fact found"
//     }
// }

// //use of html in it

// catbtn.addEventListener("click",async ()=>{
//     let fact = await getfacts();
//     console.log(fact);
//     p.innerText = fact;
// });


// //dog api

// let url2 = "https://dog.ceo/api/breeds/image/random";
// let img = document.querySelector("#dogimg")
// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message ;
//     }
//     catch(e){
//         console.log("error - ", e);
//         return "/"
//     }
// }

// //use of html in it

// dogbtn.addEventListener("click",async ()=>{
//     let link = await getImage();
//     console.log(link);
//     // dogimg.src= message;
//     img.setAttribute("src",link);
// });

//---------------------------
const jokeurl ="https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config ={headers: {Accept:"application/json"}};
        let res = await axios.get(jokeurl,config);
        console.log(res.data);
    }catch(e){
        console.log(e);
    }
}