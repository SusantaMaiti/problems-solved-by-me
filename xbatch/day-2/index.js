//architecture of js -- Inheritance
 
// The architecture of js is also based upon inheritance.

// Inheritance -- sharing some properties to child

// does hierachy exists?

//strings, number, arrays -- child

//object -- father

//grandfather -- built in object ( from js )

//great grandfather -- null

 //Inheritance?
 // A human gets access to properties and methods (characteristics) of other human.
 //in js, this applies to objects.

 // everything in js is an object


 //we can use js inheritance in two ways;
 //1. constructor functions 
 //2. object.create()method









 //inheritance using constructor function
//  function NikeProduct(n,p){
// this.name= n;
// this.price=p;
// this.brand= 'nike';
//  }

 //p1 > NikeProduct -> prototype

//  let p1= new NikeProduct('shoes', 100000)
//  console.log(p1)


 // js itself stores methods/functions on prototype

//  NikeProduct.prototype.promo = function(){
//     if(this.price>10000){
//         console.log("promo is applicable.")
//     }else{
//         return false;
//     }
//  }


//  p1.promo()




 //create a web 20: students from CF and add a method submitAssignment.

//  function students(n,c){
//     this.name= n;
//     this.course= c;
//     this.assignment= 0;
//  }
//  let s1= new students('pablo', 'js201')
//  console.log(s1)

//  students.prototype.submitAssignment= function (){
//     this.assignment++
//     console.log(this.assignment)
// }

// s1.submitAssignment()



// function product(n,b,p){
//     this.name= n;
//     this.brand= b;
//     this.price= p;
// }

// let p1= new product("phone", "apple", 11000)

// console.log(p1)

// product.prototype.offer= function(){
//     if(this.price>10000){
//         this.price=15000
//     }else{
//         return false;
//     }

// }
// p1.offer()
// console.log(p1)





// function NikeProduct(name,brand,price,rating){
//       this.name= name;
//       this.brand= brand;
//       this.price= price;
//       this.rating= rating;
// }


// let nike1= new NikeProduct("shoe", "Nike", 15000,4)
// console.log(nike1)


// NikeProduct.prototype.coupon= function(){
//     this.name= "masai"
//     if(this.price>10000){
//         this.price= 30000
//     }else{
//         return false;
//     }
// }
// nike1.coupon()
// console.log(nike1)


// let object={
//     name: "Shoe",
//     brand: "nike",
//     price: 15000,
//     rating: 4,
// }
// console.log(object)














 //inheritance using Object.create()

//comes from another object
// let nike_product = {
//     type: "snickers",
//     brand: "nike",
//     seller: "flipkart"
// }

// let n1 = Object.create(nike_product)
// n1.price= 90000

// console.log(n1)

// let student= {
//     batch: "web20",
//     course: "JS201",
//     nickname: "UPMXL",
// }

// let s1= Object.create(student)
// console.log(s1)

//parameter 
//1. object.create() --> parent object.
//2. CF --> properties to set on an object.
                               
                              //CF vs Object.create
//1.when you invoke CF, all the propertiess are set on new object, referred as 'this' in CF.
//2. when you invoke Object.create(), all the properties are set on prototype of new object.
//3. in CF, you pass properties.
//4. in Object.create(), you pass parent (a prototype) with properties.


 







//create custom array library

//create a cycle 
//raw material + brain .
//do you understand how a cycle is made?
//reverse engineering.

//to create a array, to study an array.

// let array= [1,2,3]
// let arr = new Array(1,2,3);

//fact:  CF returns object.

// array : addressing is based upon index (number)
// object : addressing is based upon key (string)

//object.0   obj."0"  vs  object.zero



//1. array has indices, key value pairs -- array is an object.

//2. all of its method are stored in its prototype.






// is mimicking line no 229.

// let arr = new Array(1,2,3);
// let arr=[1,2,3]
// console.log(arr)
// Array.prototype.sayHi= function(){
//     console.log("hello from pablo")
// }
// Array.prototype.forloop = function(){
//     for(let i=0;i<arguments.length;i++){
//         console.log(arguments[i])
//     }
// }

//inheritance 
// arr.sayHi()
//1. does Array() have parameters?

//2. my clone, MyArray should also have parameters?

//3. how can i read those arguments?


// function MyArray(){

//     Object.defineProperty(this, "length",{
//         enumerable: false,
//     })

//     this.length = arguments.length
    // console.log(arguments)
//     for(let i=0;i<arguments.length;i++){
//         this[i] = arguments[i]
//     }

// }

// let myarr= new MyArray(4,5,6)
// console.log(Object.values(myarr))
// console.log(myarr)

// MyArray is a CF

// MyArray.prototype.push  = function(value){
//      //we push at end
//      let index= this.length
//      this[index] = value
//      this.length++
//      console.log(Object.values(this))

// }
// myarr.push(7)
// myarr[0] = 4
// myarr[1] = 5
// myarr[2] = 6
