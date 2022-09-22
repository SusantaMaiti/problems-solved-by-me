// All the JS Code for the Add Students Page Goes Here

// let admission

// let namee= document.getElementById("name").value
// let email= document.getElementById("email").value
// let phone= document.getElementById("phone").value
// let gender= document.getElementById("gender").value
// let course= document.getElementById("course").value


document.querySelector("#submit").addEventListener("click", submitBtn)
function submitBtn(){
    let obj={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        gender: document.getElementById("gender").value,
        course: document.getElementById("course").value
    }
    console.log(obj)

let arr= JSON.parse(localStorage.getItem("admission")) || []
arr.push(obj)
localStorage.setItem("admission", JSON.stringify(arr)) || []

}

