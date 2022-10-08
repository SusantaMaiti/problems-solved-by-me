let arr= JSON.parse(localStorage.getItem("data")) || []
let tbody= document.querySelector("tbody")

    for(i=0;i<arr.length;i++){
        let tr= document.createElement("tr")
     let th= document.createElement("td")
        th.innerText= arr[i].name
        let th2= document.createElement("td")
        th2.innerText= arr[i].course
        let th3= document.createElement("td")
        th3.innerText= arr[i].unit
        let th4= document.createElement("td")
        th4.innerText= arr[i].batch
        let th5= document.createElement("img")
        th5.src= arr[i].image
        let btn= document.createElement("button")
        btn.innerText= "Delete"
        btn.id= "remove"


tr.append(th5,th,th2,th4,th3,btn)
        tbody.append(tr)
 

        btn.onclick= function(index){
            location.reload()
            tr.remove()
            arr.splice(index,1)
            localStorage.setItem("data", JSON.stringify(arr)) || []

       let obj={
        name: th.innerText,
        course: th2.innerText,
        unit: th3.innerText,
        batch: th4.innerText,
        image: th5.innerText

       }
 let array= JSON.parse(localStorage.getItem("dataa")) || []
       array.push(obj)
           localStorage.setItem("dataa", JSON.stringify(array)) || []
        }

       
    }



    function calculate(){
        let data = JSON.parse(localStorage.getItem("data")) || [];
    let obj={}
    
        for(let i=0;i<data.length;i++){
            if(obj[data[i].batch]==undefined){
                obj[data[i].batch]=1
            }else{
                obj[data[i].batch]++;
            }
        }
        // console.log(obj)
        let count = document.getElementById("count")
        count.innerHTML = null;
        let div = document.createElement("div")
        for (let key in obj){
            let p = document.createElement("span")
            p.innerText= `batch ${key}-${obj[key]} |`
            div.append(p)
        }
        count.append(div)
    }
    calculate()