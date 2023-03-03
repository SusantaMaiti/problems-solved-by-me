import navbar from "../components/navbar.js";
let navbar_div = document.getElementById("navbar")


navbar_div.innerHTML= navbar()





const renderTotalPrice = () =>{
    const data = JSON.parse(localStorage.getItem("addressPageData"))
    // console.log(data)


    const {totalPrice} = data;

    const span = document.getElementById("stotalPrice")

    span.innerText= totalPrice;


}
renderTotalPrice()




const one= document.getElementById("one")
const two= document.getElementById("two")
const three= document.getElementById("three")
const four= document.getElementById("four")



const handleInputone = () => {
    const oneValue= one.value;
    if(oneValue.length===1)


}

const handleInputtwo = () => {

}

const handleInputthree = () => {

}

const handleInputfour = () => {

}

one.addEventListener("input", handleInputone)
two.addEventListener("input", handleInputtwo)
three.addEventListener("input", handleInputthree)
four.addEventListener("input", handleInputfour)