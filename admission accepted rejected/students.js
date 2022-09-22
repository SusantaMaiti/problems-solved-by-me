// All the Code for All Students Page Goes Here
let data = JSON.parse(localStorage.getItem("admission")) || []


dishplayTable(data)
document.getElementById("filter").addEventListener("change", filterc)
function filterc(){
    let selected= document.getElementById("filter").value;
    if(selected=="all"){
        location.reload()
       
    }
    let sm= data.filter(function(elem){
        return elem.course == selected;
    })
 
   dishplayTable(sm)
}



function dishplayTable(data){
    document.querySelector("tbody").innerHTML= ""
    for(i=0;i<data.length;i++){
        let tr= document.createElement("tr")
        let tdd= document.createElement("td")
        tdd.innerText= data[i].name
        let td1= document.createElement("td")
        td1.innerText= data[i].email
        let td2= document.createElement("td")
        td2.innerText= data[i].course
        let td3= document.createElement("td")
        td3.innerText= data[i].gender
        let td4= document.createElement("td")
        td4.innerText= data[i].phone
        let td5= document.createElement("td")
        td5.innerText= "Accept"
        td5.style.color= "white"
        td5.style.backgroundColor= "green"
        td5.addEventListener("click", function(){
            accept()
        })
        let td6= document.createElement("td")
        td6.innerText= "Reject"
        td6.style.color= "white"
        td6.style.backgroundColor= "red"
        td6.addEventListener("click", function(){
            reject()
        })
    tr.append(tdd,td1,td2,td3,td4,td5,td6)
    
        document.querySelector("tbody").append(tr)
    
    
    
        function accept(index){
            tr.remove();
            data.splice(index,1)
            localStorage.setItem("admission", JSON.stringify(data))
          let obj={
            name: tdd.innerText,
            email: td1.innerText,
            course: td2.innerText,
            gender: td3.innerText,
            phone: td4.innerText
          }
          let arr= JSON.parse(localStorage.getItem("admission-accepted")) || []
    arr.push(obj)
          localStorage.setItem("admission-accepted", JSON.stringify(arr))
    
            }
            function reject(index){
                tr.remove();
                data.splice(index,1)
                localStorage.setItem("admission", JSON.stringify(data))
              let obj={
                name: tdd.innerText,
                email: td1.innerText,
                course: td2.innerText,
                gender: td3.innerText,
                phone: td4.innerText
              }
              let arr= JSON.parse(localStorage.getItem("admission-rejected")) || []
        arr.push(obj)
              localStorage.setItem("admission-rejected", JSON.stringify(arr))
      
                }
    }
}


