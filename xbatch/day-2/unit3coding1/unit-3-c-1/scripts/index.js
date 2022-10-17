//store the products array in localstorage as "products"
let btn= document.getElementById("add_product")
btn.onclick= function(){
let form= document.getElementById("products")
let obj=  {
type: form.type.value,
desc:  form.desc.value,
price: form.price.value,
image: form.image.value
}

let arr= JSON.parse(localStorage.getItem("products")) || []
arr.push(obj)
localStorage.setItem("products", JSON.stringify(arr)) || []

}