//https://reqres.in/api/register

import navbar from "../components/navbar.js";
let navbar_div = document.getElementById("navbar")


navbar_div.innerHTML= navbar()


const form = document.querySelector("#registration_form");

const handleFormSubmit = async (events)=>{
events.preventDefault();
const email= document.querySelector("#email").value;
const name= document.querySelector("#name").value;
const password= document.querySelector("#password").value;
const confirmpassword= document.querySelector("#confirmpassword").value

if(!email || !password || !name || !confirmpassword){
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
//api request
//.then .catch
fetch("https://reqres.in/api/register" , {
    method : 'POSt',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify(payload)

}).then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(res)
    alert("registration successfull")
    window.location.href= "login.html"
}).catch((err)=>{
    console.log(err)
})



}

form.addEventListener("submit", handleFormSubmit )
