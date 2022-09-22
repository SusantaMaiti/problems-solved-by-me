// All the Code for the Admitted page goes here
let data= JSON.parse(localStorage.getItem("admission-accepted")) || []

for(i=0;i<data.length;i++){
    let tr= document.createElement("tr")
    let name= document.createElement("td")
    name.innerText= data[i].name
    let email= document.createElement("td")
    email.innerText= data[i].email
    let course= document.createElement("td")
    course.innerText= data[i].course
    let gender= document.createElement("td")
    gender.innerText= data[i].gender
    let phone= document.createElement("td")
    phone.innerText= data[i].phone


    tr.append(name,email,course,gender,phone)
    document.querySelector("tbody").append(tr)
}
