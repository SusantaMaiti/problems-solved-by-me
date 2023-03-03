const navbar = () =>{

    let length;

    const status = JSON.parse(localStorage.getItem("token"))
    if(!status){
        length = null;
    }
    else{
        //user logged in
        const cartArr = JSON.parse(localStorage.getItem("cart"))
        if(!cartArr){
            length= null;
        }else{
            length = cartArr.length;

        }
        

    }
    console.log(length)



    //if user logged in  -> show the count
    //evaluating cart data from LS


    return ` <div class="navbar_div">
    <div>
         <h1>Sasta Flipkart</h1>
    </div>
    <div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li> <a href="product.html">Product</a> </li>
            <li>
                <a href="login.html">Login</a>
            </li>
            <li>
                <a href="cart.html">Cart ${length ? `: ${length}` : "" } </a>
            </li>
        </ul>
    </div>

</div>`



}


export default navbar;