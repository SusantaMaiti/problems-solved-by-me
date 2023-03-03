//class

// const product={
//     name: "T-shirt",
//     id:1,
//     price:1000,
//     printName: function(){
//         console.log(this.name)
//     }
// }
//it's a object

// product.printName()


//1. key value pair 
//2. methods
//{naqme:"",id:""}
class Products{
    //key value pair
    constructor(name,id,price){
        this.name = name;
        this.id= id;
        this.price= price;

    }

    //method

    printName(){
        console.log(this.name)

    }

    printage(){

    }
}

const product = new Products("T-shirt", 1, 1000)


product.printName()
// console.log(product)


