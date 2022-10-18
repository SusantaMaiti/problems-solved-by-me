function Product(name,brand,price,description, sold) {
  // Complete the constructor function
  this.name= name,
  this.brand= brand,
  this.price= price,
  this.description= description,
  this.sold= sold
}



//  p1 > NikeProduct -> prototype

 let p1= new Product('shoes',"vkc", 100000, "quality", false)



//  js itself stores methods/functions on prototype

Product.prototype.changePrice = function(){
 this.price= 300
 }
Product.prototype.toggleStatus = function(){
  if(this.sold==false){
     this.sold= true
}else if(this.sold==true){
    this.sold= false
}
}

 p1.changePrice()
 p1.toggleStatus()
 console.log(p1)
// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;
