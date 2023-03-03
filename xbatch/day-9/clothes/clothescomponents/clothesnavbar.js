
//${length ? `:${length}` :""}
// let length;

// let cartarraylength= JSON.parse(localStorage.getItem("cartarray"))
// length= cartarraylength.length;


function clothesnavbar(){
    let array= JSON.parse(localStorage.getItem("cartarray")) || []

    let length= array.length;



    return `    <div id="clothesnavbar_div">
    <a id="clotheshomereturnlogo" href="clothes.html">C</a>
    <a href="products.html"><button> Products</button></a>
    <button id="customizebutton">Customize</button>
    <a href="cart.html"><button id="cartlength"> Cart  ${length ? `:${length} ` : ""} </button></a>
    <a href=""><img id="clothesLoginLogo" src="https://cdn.onlinewebfonts.com/svg/img_411076.png" alt=""></a>
  </div>

`
}


function customizepart(){
    return `
    <div id="customizediv">
    <div>
       <h4>Text Align</h4> 
            <button id="textalignleft">Left</button>
            <button id="textaligncenter">Center</button>   
            <button id="textalignright">Right</button>
    </div>
    <div>
        <h4>Line Height</h4> 
        <button id="lineheigthnormal">Normal</button>
        <button id="lineheigthone">1.5x</button>
        <button id="lineheigthtwo">2x</button>
        <button id="lineheigththree">3x</button>
  
    </div>
    <div id="clothescontroltextgap"> 
        <h4>Font Size</h4>
        <button id="fontsizezero">Normal</button>
        <button id="fontsizeone">18 PX</button>
        <button id="fontsizetwo">20 px</button>
        <button id="fontsizethree">22 PX</button>
    </div>
  
    <div>
        <h4>Dark mode control</h4>
        <button id="clothesdarkmodeon">ON</button>
        <button id="clothesdarkmodeof">OF</button> 
    </div>
        <button id="hidecustomizebtn">X</button>

  </div>
    `
}

// export default customizepart;
// export default clothesnavbar;
export{
    clothesnavbar,
    customizepart
    

}

// export default clothesnavbar;



