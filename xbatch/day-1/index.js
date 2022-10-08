let btn= document.getElementById("button")
let name= document.getElementById("name")
let course= document.getElementById("course")
let unit= document.getElementById("unit")
let batch= document.getElementById("batch")
let image= document.getElementById("image")
let batchh= document.getElementById("batchh")
btn.onclick= function(){
        if(name.value=="" || course.value=="" || unit.value==""|| batch.value==""||image.value==""){
        alert("submit the form details")
    }else{
        let obj={
            name: name.value,
            course: course.value,
            unit: unit.value,
            batch: batch.value,
            image: image.value,
        }

        
let arr= JSON.parse(localStorage.getItem("data")) || []
arr.push(obj)
localStorage.setItem("data", JSON.stringify(arr)) || []
    }
   

    // let objj={
    //     batchh: batch.value,
    // }
    // let batcharr= JSON.parse(localStorage.getItem("batch")) || []
    // batcharr.push(objj)
    // localStorage.setItem("batch", JSON.stringify(batcharr)) || []

    

}


// let datab= JSON.parse(localStorage.getItem("batch")) || []
// let c=0
// for(i=0;i<datab.length;i++){
//     c++
// let datac= document.createElement("p")
// datac.innerText= `batch ${datab[i].batchh}- ${c} ` 


//     batchh.append(datac)
// }
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