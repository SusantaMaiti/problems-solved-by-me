let arr= JSON.parse(localStorage.getItem("products")) || []

for(i=0;i<arr.length;i++){
let div= document.createElement("div")
let image= document.createElement("img")
image.src= arr[i].image
let type= document.createElement("p")
type.innerText= arr[i].type
let desc= document.createElement("p")
desc.innerText= arr[i].desc
let price= document.createElement("p")
price.innerText= arr[i].price
let button= document.createElement("button")
button.innerText= "Remove Product"
button.id= "remove_product"
button.onclick= function(index){
    div.remove()
arr.splice(index,1)
localStorage.setItem("products", JSON.stringify(arr)) || []



// create second localstorage after remove product.
// let obj={
//     type: type.innerText,
//     desc: desc.innerText,
//     price: price.innerText,
//     image: image.src,
// }
// let arr= JSON.parse(localStorage.getItem("remove_products")) || []
// arr.push(obj)
// localStorage.setItem("remove_products", JSON.stringify(arr)) || []

}


    div.append(image,type,desc,price,button)
    document.getElementById("all_products").append(div)
}