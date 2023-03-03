
//catch the target 
import navbar from "../components/navbar.js";
let navbar_div = document.getElementById("navbar")


navbar_div.innerHTML= navbar()









const addTodoButton= document.getElementById("addTodoButton")
// addTodoButton.onclick= function(){
//     console.log("masai")
// }
//add onclick function
addTodoButton.addEventListener("click", handleAddTodo)

let todoArray= JSON.parse(localStorage.getItem("todos")) || []


//create
function handleAddTodo(){
//catch the input value;
    const inputTodoValue= document.querySelector("#todoInput").value;
if(!inputTodoValue){
    alert("Type Something")
    return;
}

    const payload= {
    todo: inputTodoValue,
    status: false,
    id: Date.now() + inputTodoValue
}

//push payload in arr
//store array in localstorage
todoArray.push(payload)
localStorage.setItem("todos", JSON.stringify(todoArray)) || []
append(todoArray)
//append(todoArray) or location.reload()
}


append(todoArray)
//get or read
function append (todos){
    document.querySelector(".allTodo_div").innerHTML= null;
todos.map((el) => {

//1. create html with dom
const mainDiv= document.createElement("div")
const h3= document.createElement("h3")
h3.innerText= el.todo;
const updateButton = document.createElement("button")
const deleteButton = document.createElement("button")
deleteButton.innerText= "Delete"
deleteButton.style.backgroundColor= "violet"
deleteButton.style.color= "black"

// Event listener
deleteButton.addEventListener("click", () => {
    handleDelete(el.id)
})

updateButton.addEventListener("click",  () => {
    handleUpdateTodo(el.id)
})

if(el.status){
    updateButton.textContent= "Done"
    updateButton.style.backgroundColor= "green"

}else{
updateButton.textContent= "Note Done"
updateButton.style.backgroundColor= "red"
}

mainDiv.append(h3,updateButton,deleteButton)
document.querySelector(".allTodo_div").append(mainDiv)

})
}






function handleUpdateTodo(id){
// alert(id)
// todoArray = 
todoArray = todoArray.map((el) => {
    //find our required obj
    if(el.id===id){
return  { ...el , status: !el.status  }
    }else{
        return el;
    }
})
localStorage.setItem("todos", JSON.stringify(todoArray)) || [];
append(todoArray)
}






function   handleDelete(id){
    //[{}, {},{}]
    todoArray= todoArray.filter((el) =>{
        // if(el.id!==id){
        // }
        return el.id !== id
    })
    localStorage.setItem("todos", JSON.stringify(todoArray)) || [];
    append(todoArray)
}
