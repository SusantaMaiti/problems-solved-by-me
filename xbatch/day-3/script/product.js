//https://fakestoreapi.com/products

import loginCheck from "../utils/loginCheck.js";


const status = loginCheck();

if(!status){
    window.location.href = "login.html"
}




import navbar from "../components/navbar.js";
let navbar_div = document.getElementById("navbar")


navbar_div.innerHTML= navbar()





const handleAddToCartClick= (el) =>{
    // alert("I agggggggggggm waithing")

    //we need a data structure for cart -> [];

    let cartArr = JSON.parse(localStorage.getItem("cart")) || [];
    

    //before pushing we have to check if data already present or not

    let flag= false;
    cartArr.map((element) =>{
        if(element.id === el.id){
            flag = true;
        }
    })
    


    if(flag){
        alert("data already present")
        return;
    }

    //add the defalut qty value to the obj;
    el.qty = 1;

    cartArr.push(el)
    // console.log(cartArr)

    //store it on local storage;
    localStorage.setItem("cart", JSON.stringify(cartArr));

    navbar_div.innerHTML= navbar()
    alert("data added to cart")
}

// we need to get the data
//fetch



// 2 ways to catch api data 
//1. using .then .catch  
//2. async await.




// using .then .catch
// fetch("https://fakestoreapi.com/products").then((res) =>{
//     return res.json();
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })





//async await
// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120
//     }
// }


const append = (data) =>{
//container -> where we have to append
const container= document.querySelector("#products_div");
container.innerHTML= null;


    data.map((el) =>{

        const mainDiv = document.createElement("div");
        const imageDiv = document.createElement("div");
        const contentDiv = document.createElement("div");
        const buttonDiv = document.createElement("div");
        const img = document.createElement("img")
        const titleP= document.createElement("p")
        const categoryP= document.createElement("p")
        const priceP= document.createElement("p")
        const buyButton = document.createElement("button")
        const addToCartButton = document.createElement("button")

        img.src= el.image;
        titleP.innerText= el.title;
        categoryP.innerText= el.category;
        priceP.innerText= el.price;
        buyButton.innerText= "Buy"
        addToCartButton.innerText= "Add to Cart"



        //add event listener
        addToCartButton.addEventListener("click", ()=>{
            handleAddToCartClick(el)
            //new task new function always don't do anything without function
        })
        imageDiv.append(img)
        contentDiv.append(titleP,categoryP,priceP)
        buttonDiv.append(buyButton,addToCartButton)

        mainDiv.append(imageDiv, contentDiv, buttonDiv)

        container.append(mainDiv)
        

        //first create html
        //give style and atributes
        //add event listeners
        //append



    })



}

const getData= async () =>{
    try{
        const response= await fetch("https://fakestoreapi.com/products");

        const data = await response.json();
        // console.log(data)
        //my append fun
        append(data)
    }
    catch(err){
        console.log(err)
        //show 404
    }
}
getData();