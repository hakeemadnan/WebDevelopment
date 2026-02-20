let url ="http://universities.hipolabs.com/search?name="
let btn = document.querySelector("button");
// let ul = document.querySelector(".list")
btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getColleges(country);
    // console.log(colArr);
    Show(colArr)
})
function Show(colArr){
    let ulist = document.querySelector("#list");
    ulist.innerText ="";
    for(col of colArr){
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        ulist.appendChild(li);
    }
}
// let country ="nepal";
async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        //console.log(res.data)
        return res.data;
    }catch(e){
        console.log("Error :-",e)
        return [];
    }
}

