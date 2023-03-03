import { clothesnavbar, customizepart } from "../clothescomponents/clothesnavbar.js"

let clothesnavbar_div= document.getElementById("clothesnavbar")
clothesnavbar_div.innerHTML= clothesnavbar();

let customizediv= document.getElementById("customizedivv")
customizediv.innerHTML=  customizepart();


import clothesfooter from '../clothescomponents/clothesfooter.js'
let clothesfooter_div= document.getElementById("clothesfooter")
clothesfooter_div.innerHTML= clothesfooter();