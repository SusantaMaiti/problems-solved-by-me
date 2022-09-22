let array= [
{rate: "1",price: 1200, name: "ddd", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "0.5",price: 200, name: "ccc", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "0.5",price: 100, name: "aaa", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "1.5",price: 120, name: "zzz", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "2",price: 15, name: "yyy", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "2.5",price: 23000, name: "sss", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "1",price: 1100, name: "fff", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "3.5",price: 12200, name: "hhh", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "5",price: 111100, name: "ggg", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "3",price: 100000000, name: "lll", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "4.5",price: 12400, name: "mmm", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},
{rate: "4",price: 10010, name: "nnn", img: "https://5.imimg.com/data5/YJ/BO/MY-10973479/mens-designer-casual-shirt-500x500.jpg"},

]
// let array= JSON.parse(localStorage.getItem("arry"))

// let arra= localStorage.setItem("arry", JSON.stringify(arr)) || []


dishplayTable(array)
document.querySelector("#sortname").addEventListener("change", sortName)
document.querySelector("#sortprice").addEventListener("change", sortPrice)
document.querySelector("#filterrating").addEventListener("change", filterrating)

function filterrating(){
    let selected= document.getElementById("filterrating").value;
    let km= array.filter(function (elem){
        return elem.rate== selected
    })
    dishplayTable(km)
}


function sortName(){
    let selected= document.getElementById("sortname").value;
    if(selected=="ascending"){
 array.sort(function(a,b){
    let x= a.name.toUpperCase();
    let y= b.name.toUpperCase();
    if(x>y) return 1;
    if(x<y) return -1;
    return 0;
    
  })
  
  dishplayTable(array)
  
    }
   
    if(selected=="decending"){
        array.sort(function(a,b){
        let x= a.name.toUpperCase();
        let y= b.name.toUpperCase();
        if(x>y) return -1;
        if(x<y) return 1;
        return 0;
    })
    
   dishplayTable(array)
   
    }  
}



function sortPrice(){
    let selected= document.getElementById("sortprice").value
if(selected=="ascending"){
   array.sort(function(a,b){
    return a.price-b.price
   }) 
   dishplayTable(array)
  
}
if(selected=="decending"){
    array.sort(function(a,b){
     return b.price-a.price
    }) 
    
   dishplayTable(array)
   
 }

}
function dishplayTable(array){
 document.getElementById("container").innerHTML=""
    for(i=0;i<array.length;i++){
        let div= document.createElement("div")
        let image = document.createElement("img")
        image.src= array[i].img;
        let name= document.createElement("p")
        name.innerText= array[i].name;
        let price = document.createElement("p")
        price.innerText= array[i].price
        let rate = document.createElement("p")
        rate.innerText= array[i].rate
        
        div.append(image,name,price,rate)
        
        
            document.getElementById("container").append(div)
        }
        
}



