
//1. input box
//2. add an oninput event listener
//3. grab the value

//jethalal                         //tappu
//a  --> fetch("a")                //avengers --> fetch("avengers")
//av --> fetch("av")               //total 8 request or 1 api request                              
//.                                // what hotstar actualy does
//..                                //when typing stop search work
//...                              
//avengers --> fetch("avengers")    
// total 8 request

//http://www.omdbapi.com/?apikey=1ab237cc&s=${query}


let movies_div= document.getElementById("movies")
let movie_div= document.getElementById

let id;


async function main(){
    try{
        let query= document.getElementById("query").value;
        // console.log(query)
        
        let res = await fetch(`http://www.omdbapi.com/?apikey=1ab237cc&s=${query}`)

        let data= await res.json()
        // let actual_data= data.Search;
        // console.log(actual_data)
        // return data.Search;

        let actual_data= data.Search
if(actual_data != undefined){
    appendMovies(actual_data)
}


       

    } catch (err){
        console.log(err)
    }
}

//issue - data is undefined;



function appendMovies(data){
movies_div.innerHTML= null;
data.forEach(function(el){
let p= document.createElement("p")
p.innerText= el.Title;


movies_div.append(p)
})
}



// debounce

function debounce(func,delay){
    //a --> debounce --> main --> seTimeout('a')  --> id=1
    //av -> debounce --> main --> setTimeout('av') --> id=2
    //ave --> debounce --> main --> settimeout('ave') --> id=3


    // current word --> ave
    //we don't need setTimeout('ave') --> fetch('ave')
if(id){
    clearTimeout(id)
}

    id= setTimeout(function(){
        func()  //main()
    } ,delay)

}
