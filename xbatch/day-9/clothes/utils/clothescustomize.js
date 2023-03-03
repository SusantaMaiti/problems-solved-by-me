let darkmode_flag_condition= JSON.parse(localStorage.getItem("darkMode_flag")) 

let clothesnavbar_div= document.getElementById("clothesnavbar_div")
let customizediv = document.getElementById("customizediv")
let clothescontent= document.getElementById("clothescontent")
// let cartcontent= document.getElementById("container")

// let clothesproductcontent= document.getElementById("clothesproductcontent")
let clothesdarkMode_Flag;
let clothesdarkmodeon= document.getElementById("clothesdarkmodeon")
let clothesdarkmodeof= document.getElementById("clothesdarkmodeof")
let body= document.getElementsByTagName("body")

let div= document.querySelectorAll(".div")




let customizebutton= document.getElementById("customizebutton")

let hidecustomizebtn= document.getElementById("hidecustomizebtn")
//dark mode function





function darkmoneonforclothes(){
    clothesnavbar_div.style.backgroundColor= "blue"
    customizediv.style.backgroundColor= "blue"
    customizediv.style.color= "white"
    clothesdarkmodeon.style.backgroundColor= "green"
    clothesdarkmodeof.style.backgroundColor= "red"
    clothescontent.style.backgroundColor= "black"
    clothescontent.style.color= "white"
for(let i=0;i<div.length;i++){
    div[i].style.backgroundColor= "black"
    div[i].style.color= "white"
}
  

}
function darkmoneofforclothes(){
    clothesnavbar_div.style.backgroundColor= "aqua"
    customizediv.style.backgroundColor= "aqua"
    customizediv.style.color= "black"
    clothesdarkmodeon.style.backgroundColor= "red"
    clothesdarkmodeof.style.backgroundColor= "green"
    clothescontent.style.backgroundColor= ""
    clothescontent.style.color= ""
    for(let i=0;i<div.length;i++){
        div[i].style.backgroundColor= ""
        div[i].style.color= ""
    }

      
}
clothesdarkmodeon.onclick= function(){
    darkmoneonforclothes()
    clothesdarkMode_Flag= true;
    localStorage.setItem("clothesdarkMode_Flag", JSON.stringify(clothesdarkMode_Flag))
}
clothesdarkmodeof.onclick= function(){
    darkmoneofforclothes()
    clothesdarkMode_Flag= false;
    localStorage.setItem("clothesdarkMode_Flag", JSON.stringify(clothesdarkMode_Flag))
}
let clothesdarkMode_Flags= JSON.parse(localStorage.getItem("clothesdarkMode_Flag"))
if(clothesdarkMode_Flags==true){
    darkmoneonforclothes()
}
if(clothesdarkMode_Flags==false){
    darkmoneofforclothes()
}

//dark mode function







//text align
let textalign_flag;
let textalignleft= document.getElementById("textalignleft")
let textaligncenter= document.getElementById("textaligncenter")
let textalignright= document.getElementById("textalignright")

function textalignLeft(){
    
    clothescontent.style.textAlign= "left"
    // cartcontent.style.textAlign= "left"
    textalignleft.style.backgroundColor= "green"
    textaligncenter.style.backgroundColor= "red"
    textalignright.style.backgroundColor= "red"

    textalignleft.style.color= "white"
    textaligncenter.style.color= "white"
    textalignright.style.color= "white"
    for(let i=0;i<body.length;i++){
        body[i].style.textAlign= "left"
    }
}
function textalignCenter(){
    clothescontent.style.textAlign= "center"
    // cartcontent.style.textAlign= "center"
    textalignleft.style.backgroundColor= "red"
    textaligncenter.style.backgroundColor= "green"
    textalignright.style.backgroundColor= "red"

    textalignleft.style.color= "white"
    textaligncenter.style.color= "white"
    textalignright.style.color= "white"

    for(let i=0;i<body.length;i++){
        body[i].style.textAlign= "center"
    }

}
function textalignRight(){
    clothescontent.style.textAlign= "right"
    // cartcontent.style.textAlign= "right"
    textalignleft.style.backgroundColor= "red"
    textaligncenter.style.backgroundColor= "red"
    textalignright.style.backgroundColor= "green"

    textalignleft.style.color= "white"
    textaligncenter.style.color= "white"
    textalignright.style.color= "white"
    for(let i=0;i<body.length;i++){
        body[i].style.textAlign= "right"
    }
    hidecustomizebtn.style.marginLeft= "100px"
}
textalignleft.onclick= function(){
    textalignLeft()
    textalign_flag= "left"
    localStorage.setItem("textalignflag", JSON.stringify(textalign_flag))
}
textaligncenter.onclick= function(){
    textalignCenter()
    textalign_flag= "center"
    localStorage.setItem("textalignflag", JSON.stringify(textalign_flag))
}
textalignright.onclick= function(){
    textalignRight()
    textalign_flag= "right"
    localStorage.setItem("textalignflag", JSON.stringify(textalign_flag))
}
let textalign_flags= JSON.parse(localStorage.getItem("textalignflag"))
if(textalign_flags=="left"){
    textalignLeft()
}
if(textalign_flags=="center"){
    textalignCenter()
}
if(textalign_flags=="right"){
    textalignRight()
}

//text align





//line height
let lineheigth_flag;
let lineheigthnormal= document.getElementById("lineheigthnormal")
let lineheigthone= document.getElementById("lineheigthone")
let lineheigthtwo= document.getElementById("lineheigthtwo")
let lineheigththree= document.getElementById("lineheigththree")


// lineheigthone
// lineheigthtwo
// lineheigththree
function lineheigthNormal(){
    for(let i=0;i<body.length;i++){
        body[i].style.lineHeight= "normal"
    }
    lineheigthnormal.style.backgroundColor= "green"
    lineheigthone.style.backgroundColor= "red"
    lineheigthtwo.style.backgroundColor= "red"
    lineheigththree.style.backgroundColor= "red"

    lineheigthnormal.style.color= "white"
    lineheigthone.style.color= "white"
    lineheigthtwo.style.color= "white"
    lineheigththree.style.color= "white"

}
function lineheigthOne(){
    for(let i=0;i<body.length;i++){
        body[i].style.lineHeight= "25px"
    }
    lineheigthnormal.style.backgroundColor= "red"
    lineheigthone.style.backgroundColor= "green"
    lineheigthtwo.style.backgroundColor= "red"
    lineheigththree.style.backgroundColor= "red"

    lineheigthnormal.style.color= "white"
    lineheigthone.style.color= "white"
    lineheigthtwo.style.color= "white"
    lineheigththree.style.color= "white"

}
function lineheigthTwo(){
    for(let i=0;i<body.length;i++){
        body[i].style.lineHeight= "35px"
    }
    lineheigthnormal.style.backgroundColor= "red"
    lineheigthone.style.backgroundColor= "red"
    lineheigthtwo.style.backgroundColor= "green"
    lineheigththree.style.backgroundColor= "red"

    lineheigthnormal.style.color= "white"
    lineheigthone.style.color= "white"
    lineheigthtwo.style.color= "white"
    lineheigththree.style.color= "white"
}
function lineheigthThree(){
    for(let i=0;i<body.length;i++){
        body[i].style.lineHeight= "45px"
    }
    lineheigthnormal.style.backgroundColor= "red"
    lineheigthone.style.backgroundColor= "red"
    lineheigthtwo.style.backgroundColor= "red"
    lineheigththree.style.backgroundColor= "green"

    lineheigthnormal.style.color= "white"
    lineheigthone.style.color= "white"
    lineheigthtwo.style.color= "white"
    lineheigththree.style.color= "white"
}

lineheigthnormal.onclick= function(){
    lineheigthNormal()
    lineheigth_flag="normal"
    localStorage.setItem("lineheight_Flags", JSON.stringify(lineheigth_flag))
}
lineheigthone.onclick= function(){
    lineheigthOne()
    lineheigth_flag="one"
    localStorage.setItem("lineheight_Flags", JSON.stringify(lineheigth_flag))
}
lineheigthtwo.onclick= function(){
    lineheigthTwo()
    lineheigth_flag="two"
    localStorage.setItem("lineheight_Flags", JSON.stringify(lineheigth_flag))
}
lineheigththree.onclick= function(){
    lineheigthThree()
    lineheigth_flag="three"
    localStorage.setItem("lineheight_Flags", JSON.stringify(lineheigth_flag))
}

let lineheigth_flags= JSON.parse(localStorage.getItem("lineheight_Flags"))

if(lineheigth_flags=="normal"){
    lineheigthNormal()
}
if(lineheigth_flags=="one"){
    lineheigthOne()
}
if(lineheigth_flags=="two"){
    lineheigthTwo()
}
if(lineheigth_flags=="three"){
    lineheigthThree()
}
//line height




//font size

// fontsizezero
// fontsizeone
// fontsizetwo
// fontsizethree
let fontsize_flag;
let fontsizezero = document.getElementById("fontsizezero")
let fontsizeone = document.getElementById("fontsizeone")
let fontsizetwo =document.getElementById("fontsizetwo")
let fontsizethree =document.getElementById("fontsizethree")

function fontsizeNormal(){
    for(let i=0;i<body.length;i++){
        body[i].style.fontSize= "16px"
    }
    fontsizezero.style.backgroundColor= "green"
    fontsizeone.style.backgroundColor= "red"
    fontsizetwo.style.backgroundColor= "red"
    fontsizethree.style.backgroundColor= "red"

    fontsizezero.style.color= "white"
    fontsizeone.style.color= "white"
    fontsizetwo.style.color= "white"
    fontsizethree.style.color= "white"
}
function fontsizeOne(){
    for(let i=0;i<body.length;i++){
        body[i].style.fontSize= "20px"
    }
    fontsizezero.style.backgroundColor= "red"
    fontsizeone.style.backgroundColor= "green"
    fontsizetwo.style.backgroundColor= "red"
    fontsizethree.style.backgroundColor= "red"

    fontsizezero.style.color= "white"
    fontsizeone.style.color= "white"
    fontsizetwo.style.color= "white"
    fontsizethree.style.color= "white"
}
function fontsizeTwo(){
    for(let i=0;i<body.length;i++){
        body[i].style.fontSize= "25px"
    }
    fontsizezero.style.backgroundColor= "red"
    fontsizeone.style.backgroundColor= "red"
    fontsizetwo.style.backgroundColor= "green"
    fontsizethree.style.backgroundColor= "red"

    fontsizezero.style.color= "white"
    fontsizeone.style.color= "white"
    fontsizetwo.style.color= "white"
    fontsizethree.style.color= "white"
}
function fontsizeThree(){
    for(let i=0;i<body.length;i++){
        body[i].style.fontSize= "30px"
    }
    fontsizezero.style.backgroundColor= "red"
    fontsizeone.style.backgroundColor= "red"
    fontsizetwo.style.backgroundColor= "red"
    fontsizethree.style.backgroundColor= "green"

    fontsizezero.style.color= "white"
    fontsizeone.style.color= "white"
    fontsizetwo.style.color= "white"
    fontsizethree.style.color= "white"
}

fontsizezero.onclick= function(){
    fontsizeNormal()
    fontsize_flag="normal"
    localStorage.setItem("fontsizeFlag", JSON.stringify(fontsize_flag))
}
fontsizeone.onclick= function(){
    fontsizeOne()
    fontsize_flag="one"
    localStorage.setItem("fontsizeFlag", JSON.stringify(fontsize_flag))
}
fontsizetwo.onclick= function(){
    fontsizeTwo()
    fontsize_flag="two"
    localStorage.setItem("fontsizeFlag", JSON.stringify(fontsize_flag))
}
fontsizethree.onclick= function(){
    fontsizeThree()
    fontsize_flag="three"
    localStorage.setItem("fontsizeFlag", JSON.stringify(fontsize_flag))
}
let font_flag= JSON.parse(localStorage.getItem("fontsizeFlag"))

if(font_flag=="normal"){
    fontsizeNormal()
}
if(font_flag=="one"){
    fontsizeOne()
}
if(font_flag=="two"){
    fontsizeTwo()
}
if(font_flag=="three"){
    fontsizeThree()
}
//font size


//customize option hide and show

hidecustomizebtn.style.backgroundColor= "red"
hidecustomizebtn.style.fontSize= "50px"
// hidecustomizebtn.style.width= "50px"
customizebutton.onclick= function(){
        customizediv.style.display= "grid";
        customizediv.style.gridTemplateColumns= "repeat(5,1fr)";
        customizediv.style.padding= "8px";


}
hidecustomizebtn.onclick= function(){
    customizediv.style.display= "none"
}