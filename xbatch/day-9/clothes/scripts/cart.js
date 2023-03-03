import { clothesnavbar, customizepart } from "../clothescomponents/clothesnavbar.js"

let clothesnavbar_div= document.getElementById("clothesnavbar")
clothesnavbar_div.innerHTML= clothesnavbar();

let customizediv= document.getElementById("customizedivv")
customizediv.innerHTML=  customizepart();


import clothesfooter from '../clothescomponents/clothesfooter.js'
let clothesfooter_div= document.getElementById("clothesfooter")
clothesfooter_div.innerHTML= clothesfooter();



let data= JSON.parse(localStorage.getItem("cartarray")) || []



const pricecalculationhandle = () =>{
  let sum=0;
  let cdata= JSON.parse(localStorage.getItem("cartarray")) || []
  cdata.map((el)=>{
    sum= sum+ el.price*el.qty;
  })
sum = Math.round(sum)
let totalprice = document.getElementById("totalprice")
totalprice.innerText= sum
}
pricecalculationhandle()

const handlequantity= (el, type)=>{


    if(type==="-" && el.qty===1){
        alert("cant reduce quantity")
        return;
    }
    
let cartdata= JSON.parse(localStorage.getItem("cartarray")) || []


       
    if(type=="+"){
        //increment
        //identify the object
        cartdata= cartdata.map((element)=>{
            if(element.id===el.id){
                return {...element , qty: element.qty + 1}
            }else{
                return element;
            }
        })

        
      
        localStorage.setItem("cartarray", JSON.stringify(cartdata))
        append(cartdata)
        pricecalculationhandle()
    }
    if(type=="-"){
        //decrement
        cartdata= cartdata.map((element)=>{
            if(element.id===el.id){
                return {...element , qty: element.qty - 1}
            }else{
                return element;
            }
        })
        
    
        localStorage.setItem("cartarray", JSON.stringify(cartdata))
        append(cartdata)
        pricecalculationhandle()
    }

}

const removehandle= (el)=>{
    // console.log(el.id)
    let cartdata= JSON.parse(localStorage.getItem("cartarray")) || []

    let staydata= cartdata.filter(function(element){
        return element.id !== el.id
    })
    localStorage.setItem("cartarray", JSON.stringify(staydata))
    append(staydata)
    pricecalculationhandle()
    clothesnavbar_div.innerHTML= clothesnavbar();
    
}








const append = (data)=> {
    let container=document.getElementById("container")
    container.innerHTML= null;

    data.forEach(function(elements){
        let div= document.createElement("div")
        let image= document.createElement("img")
        image.src= elements.image;
        let title= document.createElement("p")
        title.innerText= elements.title;
        let price= document.createElement("p")
        price.innerText= elements.price;
        let qtyp= document.createElement("p")
        qtyp.innerText= "quantity"+ `${elements.qty}`
        let incrementbtn= document.createElement("button")
        incrementbtn.innerText= "+"
        incrementbtn.style.backgroundColor= "brown"
        incrementbtn.style.color= "white"
        let decrementbtn= document.createElement("button")
        decrementbtn.innerText= "-"
        decrementbtn.style.margin= "5px"
        decrementbtn.style.backgroundColor= "brown"
        decrementbtn.style.color= "white"
        let btn= document.createElement("button")
        btn.innerText= "Remove"
        btn.style.backgroundColor= "red"
        btn.style.color= "white"
        btn.addEventListener("click", ()=>{
            removehandle(elements)
           
        })
        incrementbtn.addEventListener("click", ()=>{
            handlequantity(elements, "+")
        })
        decrementbtn.addEventListener("click", ()=>{
            handlequantity(elements,"-")
        })
        div.append(image,title,price,qtyp,incrementbtn,decrementbtn,btn)
        container.append(div)
    })
}
append(data)