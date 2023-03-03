//create a class   
//whats methods we have
//1. renderStateDetails
//2. handlePaymentModeChange
//3. handleFormsSubmit
//4. navbarRender


import navbar from "../components/navbar.js";
import data from "../utils/data.js"

class Address{
    //key value pair
    constructor(){

    }

    //methods is nothing but function
    renderStateDetails(data){
        const select = document.querySelector("#state_select");
        data.map((el) =>{
            //el -> string
            //create html
            //atributes
            //event listener
            //append
    
            const option = document.createElement("option");
            option.innerText= el;
            option.value= el;
    
            select.append(option)
        })


    }
    handlePaymentModeChange(){
        const value = document.querySelector("#paymentMode_select").value
    if(value==="cod"){
        const container = document.querySelector("#paymentDetails_div")
        container.innerHTML= null;
        return;
    }else{
        //card
        //we need to append 4 html input inside the paymentdetails div;
        const container = document.querySelector("#paymentDetails_div")

        //what?
        const html= ` <label for="">Card Number</label>
        <input type="text" id="cardNumber">

        <label for="">CVV</label>
        <input type="text" id="cvv">

        <label for="">Expiry Date</label>
        <input type="date" id="expiryDate">

        <label for="">Card Holder Name</label>
        <input type="text" id="cardHolderName">
`

container.innerHTML= html;
    }


    

    }
    #handlevalidation(name,address,city,selectState,pin,paymentMode){
        if(!name || !address || !city || !selectState || !pin || !paymentMode){
            // alert("fil the details")
            return false;

        }
        return true;
    }
    handleFormsSubmit(){
        // event.preventDefault()
        //cath all the value;
    
        //common value //cod
        const name= document.querySelector("#name").value;
        const address= document.querySelector("#address").value;
        const city= document.querySelector("#city").value;
        const selectState= document.querySelector("#state_select").value;
        const pin= document.querySelector("#pin").value;
        const paymentMode= document.querySelector("#paymentMode_select").value;
    const status = this.#handlevalidation(name,address,city,selectState,pin,paymentMode)
    if(!status){
        alert("Fill the details")
        return;
    }
        let cardNumber;
        let cvvNumber;
        let expiryDate;
        let cardHolderName;
    
        //if user select card
        if(paymentMode=== "card"){
            cardNumber = document.querySelector("#cardNumber").value;
            cvvNumber = document.querySelector("#cvv").value;
            expiryDate = document.querySelector("#expiryDate").value;
            cardHolderName = document.querySelector("#cardHolderName").value;
    
            if(!cardNumber || !cvvNumber || !expiryDate || !cardHolderName){
                alert("Missing card details")
                return;
    
            }
        }
    
        const payload = {
            name,
            address,
            city,
            selectState,
            pin,
            paymentMode
        }
        if(paymentMode=== "card"){
            payload.cardDetails = {
                cardNumber,
                cvvNumber,
                expiryDate,
                cardHolderName
            }
        
        }
        const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
        payload.totalPrice = totalPrice;
        console.log(payload)
    
    
        console.log(payload)
        //we need to store in data base
        localStorage.setItem("addressPageData", JSON.stringify(payload));
    
        //redirect user to otp page
        window.location.href= "otp.html"

    }
    navbarRender(){
        let navbar_div = document.getElementById("navbar")
        navbar_div.innerHTML= navbar()
    }

}

const address=  new Address()

address.navbarRender()
address.renderStateDetails(data)

const paymentModeSelect = document.querySelector("#paymentMode_select")
paymentModeSelect.addEventListener("change", address.handlePaymentModeChange)



const form = document.querySelector("#addressForm_form");
form.addEventListener("submit", (event) =>{
    event.preventDefault();
    address.handleFormsSubmit();
})
