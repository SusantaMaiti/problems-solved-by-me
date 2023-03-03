let fetchurl= 'https://jsonplaceholder.typicode.com/todos'
fetch(fetchurl).then((Response)=>{
    return Response.json()
}).then((data)=>{
 
        let km= data.filter(function (elem){
            return elem.completed== false
        })
        dishplaysort(km)
        console.log(km)
    
    
     
})

let application= document.getElementById("container")
function dishplaysort(data){
    
    for(let i=0;i<data.length;i++){
let div= document.createElement("div")
let id= document.createElement("p")
id.innerText= data[i].id;
let title= document.createElement("p")
title.innerText= data[i].title;
let body= document.createElement("p")
body.innerText= data[i].completed;

        div.append(id,title,body)
        application.append(div)
    }
}