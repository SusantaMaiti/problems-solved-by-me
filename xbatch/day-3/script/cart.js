import navbar from "../components/navbar.js";
let navbar_div = document.getElementById("navbar")


navbar_div.innerHTML= navbar()


import loginCheck from "../utils/loginCheck.js";


const status = loginCheck();

if(!status){
    window.location.href = "login.html"
}



const handleRemove = (el) => {

    //identify and delete
    let cartArr = JSON.parse(localStorage.getItem("cart"))
    //[]
    cartArr = cartArr.filter((element) => {
        return element.id !== el.id;
    })
    localStorage.setItem("cart" , JSON.stringify(cartArr))
    append(cartArr)
    handlePriceCalculation()
    navbar_div.innerHTML= navbar()
    
   


}

const handlePriceCalculation = () =>{
    //which data need

    const cartArr = JSON.parse(localStorage.getItem("cart"))

    let sum = 0;
    cartArr.map((el) =>{
        sum+=  Number(el.price * el.qty) 
    })
    sum= Math.round(sum)

    // console.log(sum)

    //show that value
    //where? -> span
    const span = document.querySelector("#totalPrice_span");
    span.innerText= sum;
    localStorage.setItem("totalPrice", JSON.stringify(sum));

}

handlePriceCalculation()
const handleQuantity= (el, type)=>{
    //we can identify ki which data  i need to update

    if(type === "-" && el.qty === 1){
        alert("cant reduce qty")
        return
    }
    //{} -> where we need to update the qty
    //[{}, {}, {}, {}, {}]
    let cartArr = JSON.parse(localStorage.getItem("cart"))
    //first we have to check what is the type


    if(type==="+"){
        //increment
        //identify the object
        cartArr = cartArr.map((element) =>{
            if(element.id === el.id){
                //we identify 
                return {...element, qty: element.qty + 1}

            }else{
                return element;
            }
        })
        localStorage.setItem("cart", JSON.stringify(cartArr))

        append(cartArr)
        handlePriceCalculation()

        

    

    }
    else{
        //decrement

        cartArr = cartArr.map((element) =>{
            if(element.id === el.id){
                //we identify 
                return {...element, qty: element.qty - 1}

            }else{
                return element;
            }
        })
        localStorage.setItem("cart", JSON.stringify(cartArr))

        append(cartArr)
        handlePriceCalculation()
        

    }

}

const append = (data) =>{
    //container -> where we have to append
    const container= document.querySelector("#cartProducts_div");
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

            const qtyP = document.createElement("p")
            qtyP.innerText= "quantity " + `${el.qty}`
            qtyP.style.color = "yellow"
            
            


            const incrementButton = document.createElement("button")
            const decrementButton = document.createElement("button")
            const removeButton = document.createElement("button")

    

            img.src= el.image;
            titleP.innerText= el.title;
            categoryP.innerText= el.category;
            priceP.innerText= el.price;
            incrementButton.innerText= "+"
            decrementButton.innerText= "-"
            removeButton.innerText= "Remove"

            removeButton.style.backgroundColor= "red"
            removeButton.style.color= "white"

            incrementButton.style.backgroundColor = "teal"
            incrementButton.style.color = "white"
            decrementButton.style.backgroundColor = "teal"
            decrementButton.style.color= "white"

            //add event listener
            incrementButton.addEventListener("click", ()=>{
                handleQuantity(el, "+");
            })

            decrementButton.addEventListener("click", ()=>{
                handleQuantity(el, "-")
            })

            removeButton.addEventListener("click", ()=>{

                handleRemove(el)
            })



    
    
    
            //add event listener

            imageDiv.append(img)
            contentDiv.append(titleP,categoryP,priceP, qtyP)
            buttonDiv.append(decrementButton,incrementButton,removeButton)
    
            mainDiv.append(imageDiv, contentDiv, buttonDiv)
    
            container.append(mainDiv)
            
    
            //first create html
            //give style and atributes
            //add event listeners
            //append
    
    
    
        })
    
    
    
    }

    //getting data from local storage and appending the data on ui
    const getData = ()=>{

        const cartArr = JSON.parse(localStorage.getItem("cart"));
        append(cartArr)
    }
    getData()



    const addressbutton= document.getElementById("addressPage_button")
    addressbutton.addEventListener("click", ()=>{
        //check cart data

        const cartArr= JSON.parse(localStorage.getItem("cart"));
        if(!cartArr || cartArr.length=== 0){

            alert("Nothing in cart")
            return;
        }



        window.location.href= "address.html"
    })