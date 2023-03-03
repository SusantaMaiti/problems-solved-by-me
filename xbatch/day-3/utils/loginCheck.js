const loginCheck = () =>{
    // try to get the token from local storage
    const token= JSON.parse(localStorage.getItem("token"));
    

    //True
    if(token){
        return true;

    
    }
    else{
        return false;

    }
}


//export this function
export default loginCheck;

 


// let res  = loginCheck()
// console.log(res)  //--> true