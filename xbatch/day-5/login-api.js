// let url = "github.com/masai-school/api-mocker/wiki/Authentication-API"
// fetch(url).then(function(res){
//     return res.json()
// }).then(function(res){
//     console.log(res)
// }).catch(function(err){
//     console.log(err)
// })
// async function bal(){
//     let res= await fetch(`github.com/masai-school/api-mocker/wiki/Authentication-API`)
//     let dat= await res.json()
//     console.log(dat)

// }
// bal()

// 1. collect the data 
//2. CF to create object of above data
//3. where 
//4. do i need server comunication?
//4. d



function getInputValue(id){

    let value= document.getElementById(id).value;
return value;
}

function User(n , e, p, u, m, d){
    this.name= n;
    this.email= e;
    this.password= p;
    this.username= u;
    this.mobile= m;
    this.description= d;
}



async function Register(){
const name = getInputValue("name");
const email= getInputValue("email");
const password= getInputValue("password");
const username= getInputValue("username");
const mobile= getInputValue("mobile");
const description = getInputValue("description");

let user_data = new User(name,email,password,username,mobile,description)
// console.log(user_data)

//auth/register
const register_url = `https://masai-api-mocker.herokuapp.com/auth/register`

//by default , fetch will make GET request
//what if we want to do post request?

 let res = await fetch(register_url, {
    method: "POST",
    body: JSON.stringify(user_data),
    headers: {
        'Content-Type': 'application/json',
    },

 });
 let data= await res.json()
 console.log(data)


//object
}



async function Login(){
    let login_data = {
        username: document.getElementById("login-username").value,
        password: document.getElementById('login-password').value,

    };
    console.log(login_data)

    const login_url = `https://masai-api-mocker.herokuapp.com/auth/login`
    let res = await fetch(login_url, {
        method: 'POST',
        body: JSON.stringify(login_data),
        //headers - additiional information about api request
        headers: {
            'Content-Type': 'application/json',
        },
    })
    let data= await res.json();
    let token= data.token
    console.log(data)
    getProfile(login_data.username, token)

}


async function getProfile(username, token){
    // url, username, token

    let api= `https://masai-api-mocker.herokuapp.com/user/${username}`
    let res = await fetch(api, {
        // method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    let data = await res.json()
    console.log(data)
}