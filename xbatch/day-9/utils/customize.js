// import clothesnavbar from "../clothes/clothescomponents/clothesnavbar"

let body= document.getElementsByTagName("body")

let p= document.getElementsByTagName('p')
let a= document.getElementsByTagName('a')


let navbar_div= document.getElementById("navbar")

let footer_div= document.getElementById("panel")

let flipid= document.getElementById("flip")



  $(document).ready(function(){
    $("#flipp").click(function(){
      $("#panel").slideToggle("slow");
    });
  });





  //text level control

 let zeropxgap= document.getElementById("zeropxgap")
 let onepxgap= document.getElementById("onepxgap")
 let twopxgap= document.getElementById("twopxgap")
 let threepxgap= document.getElementById("threepxgap")

 let textgaplevel_Status;
 


  function textgaplevelZero(){
    zeropxgap.style.backgroundColor= "green"
    onepxgap.style.backgroundColor= "red"
    twopxgap.style.backgroundColor= "red"
    threepxgap.style.backgroundColor= "red"
    for(let i=0;i<body.length;i++){
      body[i].style.letterSpacing= "0px"
    }

  }
  function textgaplevelOne(){
    zeropxgap.style.backgroundColor= "red"
    onepxgap.style.backgroundColor= "green"
    twopxgap.style.backgroundColor= "red"
    threepxgap.style.backgroundColor= "red"
    for(let i=0;i<body.length;i++){
      body[i].style.letterSpacing= "2px"
    }
    
  }
  function textgaplevelTwo(){
    zeropxgap.style.backgroundColor= "red"
    onepxgap.style.backgroundColor= "red"
    twopxgap.style.backgroundColor= "green"
    threepxgap.style.backgroundColor= "red"
    for(let i=0;i<body.length;i++){
      body[i].style.letterSpacing= "6px"
    }
    
  }
  function textgaplevelThree(){
    zeropxgap.style.backgroundColor= "red"
    onepxgap.style.backgroundColor= "red"
    twopxgap.style.backgroundColor= "red"
    threepxgap.style.backgroundColor= "green" 
    for(let i=0;i<body.length;i++){
      body[i].style.letterSpacing= "8px"
    } 
  } 


  zeropxgap.onclick= function(){
    textgaplevelZero()
    textgaplevel_Status= "levelZero"
    localStorage.setItem("textGapLevel", JSON.stringify(textgaplevel_Status))
  }
  onepxgap.onclick= function(){
    textgaplevelOne()
    textgaplevel_Status= "levelOne"
    localStorage.setItem("textGapLevel", JSON.stringify(textgaplevel_Status))

  }
  twopxgap.onclick= function(){
    textgaplevelTwo()
    textgaplevel_Status= "levelTwo"
    localStorage.setItem("textGapLevel", JSON.stringify(textgaplevel_Status))
    
  }
  threepxgap.onclick= function(){
    textgaplevelThree()
    textgaplevel_Status= "levelThree"
    localStorage.setItem("textGapLevel", JSON.stringify(textgaplevel_Status))
    
  }

  let textgapStatus= JSON.parse(localStorage.getItem("textGapLevel"))
  if(textgapStatus=="levelZero"){
    textgaplevelZero()

 
  }
  if(textgapStatus=="levelOne"){
    textgaplevelOne()
  }
  if(textgapStatus=="levelTwo"){
    textgaplevelTwo()
  }
  if(textgapStatus=="levelThree"){
    textgaplevelThree()
  }
  
   //text level control
  
  
  
  


  //highlight a tag
  let hightlightATag_flag;
  let ahighlighton= document.getElementById("highlightaTag")
  let highlightaTagof= document.getElementById("highlightaTagof")

  function highlightaTagOn(){
    highlightaTagof.style.backgroundColor= "red"
    highlightaTagof.style.color= "white"
    ahighlighton.style.backgroundColor= "green"
    ahighlighton.style.color= "white"
    for(let i=0;i<a.length;i++){
      a[i].style.backgroundColor= "grey"
    }
  }

  function highlightaTagOff(){
    highlightaTagof.style.backgroundColor= "green"
    highlightaTagof.style.color= "white"
    ahighlighton.style.backgroundColor= "red"
    ahighlighton.style.color= "white"
    for(let i=0;i<a.length;i++){
      a[i].style.backgroundColor= ""    
    }
  }
  

  ahighlighton.onclick= function (){
    highlightaTagOn()
    hightlightATag_flag= true;
    localStorage.setItem("highlightATagStatus", JSON.stringify(hightlightATag_flag))

  }

  highlightaTagof.onclick= function (){
    highlightaTagOff()
    hightlightATag_flag= false;
    localStorage.setItem("highlightATagStatus", JSON.stringify(hightlightATag_flag))
  }

  let highlightAtag_status = JSON.parse(localStorage.getItem("highlightATagStatus"))

  if(highlightAtag_status==true){
    highlightaTagOn()
  }

  if(highlightAtag_status==false){
    highlightaTagOff()
  }

  //highlight a tag









  //highlight p tag
  let highlightP_flag;
  let highlightpTag= document.getElementById("highlightpTag")
  let highlightpTagof= document.getElementById("highlightpTagof")


  function highlightOn_PTag(){
    highlightpTagof.style.backgroundColor= "red"
    highlightpTagof.style.color= "white"
    highlightpTag.style.backgroundColor= "green"
    highlightpTag.style.color= "white"
    for(let i=0;i<p.length;i++){
      p[i].style.backgroundColor= "grey"
    }
  }

  function highlightOff_PTag(){
    highlightpTagof.style.backgroundColor= "green"
    highlightpTagof.style.color= "white"
    highlightpTag.style.backgroundColor= "red"
    highlightpTag.style.color= "white"
    for(let i=0;i<p.length;i++){
      p[i].style.backgroundColor= ""
    }
  }



  highlightpTag.onclick= function (){
    highlightOn_PTag() 
    highlightP_flag=true;
    localStorage.setItem("highlightP_flag", JSON.stringify(highlightP_flag))
    }
      
  highlightpTagof.onclick= function (){
    highlightOff_PTag()
    highlightP_flag=false;
    localStorage.setItem("highlightP_flag", JSON.stringify(highlightP_flag))
    }

  let highlightP_flag_condition= JSON.parse(localStorage.getItem("highlightP_flag"))

  if(highlightP_flag_condition==true){
    highlightOn_PTag()

  }
  if(highlightP_flag_condition==false){
    highlightOff_PTag()
  }

  //highlight p tag

  


     












      
  //Dark Mode on of function

  let darkMode_flag;
  let darkmodeon= document.getElementById("darkmodeon")
  let darkmodeof= document.getElementById("darkmodeof")

  function darkModeOn(){
    darkmodeof.style.backgroundColor= "red"
    darkmodeof.style.color= "white"
    darkmodeon.style.backgroundColor= "green"
    darkmodeon.style.color= "white"

      
    for(let i=0;i<body.length;i++){
      body[i].style.backgroundColor= "black"
      body[i].style.color= "white"
      navbar_div.style.backgroundColor= "black"
      flipid.style.backgroundColor= "green"        
    }

    for(let i=0;i<a.length;i++){
      a[i].style.color= "white"       
    }

    navbar_div.style.backgroundColor= "red"
    footer_div.style.backgroundColor= "red"
  }
  function darkModeOf(){
    darkmodeof.style.backgroundColor= "green"
    darkmodeof.style.color= "white"
    darkmodeon.style.backgroundColor= "red"
    darkmodeon.style.color= "white"


    for(let i=0;i<body.length;i++){
      body[i].style.backgroundColor= "white"
      body[i].style.color= "black"
      navbar_div.style.backgroundColor= "white"
      flipid.style.backgroundColor= "white"
    }

    for(let i=0;i<a.length;i++){
      a[i].style.color= "black"
    }

    navbar_div.style.backgroundColor= "#e5eecc"
    footer_div.style.backgroundColor= "#e5eecc"
    flipid.style.backgroundColor= "#e5eecc"

  }




 
  darkmodeon.onclick= function(){
    darkModeOn()
    darkMode_flag=true;
    localStorage.setItem("darkMode_flag", JSON.stringify(darkMode_flag))

  }
 
  darkmodeof.onclick= function(){
    darkModeOf()
    darkMode_flag=false;
    localStorage.setItem("darkMode_flag", JSON.stringify(darkMode_flag))
  }


  let darkmode_flag_condition= JSON.parse(localStorage.getItem("darkMode_flag"))    
if(darkmode_flag_condition==true){
  darkModeOn()
  }

if(darkmode_flag_condition==false){
  darkModeOf()
}

//Dark Mode on of function


