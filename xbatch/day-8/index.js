
let container= document.getElementById("container")


async function Search(){
try{
    let input= document.getElementById("input").value
    let res= await fetch(`http://www.omdbapi.com/?apikey=1ab237cc&s=${input}`)
    let dat= await res.json()
    if(dat.Search!=undefined){
        dishPlayTable(dat.Search)
    }
  
}catch(err){
    console.log(err)
}
}


function dishPlayTable(data){
    container.innerHTML= null;
data.forEach(function(el){
let div= document.createElement("div")
let image= document.createElement("img")
image.src= el.Poster;
let name= document.createElement("p")
name.innerText= el.Title;
let year= document.createElement("p")
year.innerText= el.Year;

div.append(image,name,year)


    container.append(div)
})



   
}