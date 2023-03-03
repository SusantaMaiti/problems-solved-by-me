
import navbar from "../components/navbar.js";
let navbar_div = document.getElementById("navbar")


navbar_div.innerHTML= navbar()




const form = document.querySelector("#login_form");

const handleFormSubmit = async (events)=>{
events.preventDefault();
const email= document.querySelector("#email").value;
const password= document.querySelector("#password").value;
if(!email || !password){
    alert("Fill the details")
    return;
}

const payload ={
    // email,
    email: "eve.holt@reqres.in",
    // password
    password: "cityslicka"
}
console.log(payload)
//make a post request to the server
// we need some server -> fake server -> POST request
// link -> https://reqres.in/api/login

//two ways to make API request
//1. Async await
//2. .then and .catch


//post type
//method -> done
//headers ->
//body

//1. you need to make function async
//2. start API request with fetch
//3. try catch block
try{
    //it is the only get request
    //how to convert to a post request after api link
    const response = await fetch("https://reqres.in/api/login" , {
       method: 'POST',
       headers: {
        'Content-Type' : 'application/json'
       },
       body: JSON.stringify(payload)
    })
    const data= await response.json();

    // console.log(data)
    //You are auth 
    alert("login success")

    //you have the tokens you can store it in LS

    localStorage.setItem("token", JSON.stringify(data))
    //what ever you want to do after login you can write here
    window.location.href= "product.html"
}catch(err){
    console.log(err)
}



}

form.addEventListener("submit", handleFormSubmit )
