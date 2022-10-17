//https://fakestoreapi.com/products

// we need to get the data
//fetch



// 2 ways to catch api data 
//1. using .then .catch  
//2. async await.




// using .then .catch
// fetch("https://fakestoreapi.com/products").then((res) =>{
//     return res.json();
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })





//async await
// const getData= async () =>{
//     try{
//         const response= await fetch("https://fakestoreapi.com/products");

//         const data = await response.json();
//         console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// getData();