let arrr= [{name: "hero", image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg", rating:4 },{name: "hero", image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg", rating:4 },{name: "hero", image:"https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg", rating:4 },
{name: "hero", image:"https://s.yimg.com/uu/api/res/1.2/0GBXd289dMqVEPaqTl4x5w--~B/aD0xNTAwO3c9MTAzNTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5", rating:4 },
{name: "hero", image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg", rating:4 }
]

let id;
function Start(){

    let i=0;
    let container= document.getElementById("container")
    container.innerHTML= null;
    let img= document.createElement("img")
    img.src= arrr[0].image
    container.append(img)
    i++
    id = setInterval(function(){
        if(i==arrr.length){
            i=0;
        }
        img.src= arrr[i].image
        container.append(img)
        i++
    }, 1000)

}
function Stop(){
    clearInterval(id)
}





//slideshow
//create an input box
//added eventlistener on button

async function searchMovies(){
    //you need collection of movies.
    //where is the collection then?
    //do we have some server which stores movie data?
    //url?
    //you need to tell server which movie you want?
    //whatever you need you need to pass it in url.
    try{
        let query= document.getElementById("query").value;
        let res = await fetch(`http://www.omdbapi.com/?apikey=1ab237cc&s=${query}`);
    let data= await res.json()
    // console.log(data)
    let actual_data= data.Search;
   dishplayTable(actual_data)

    // console.log(actual_data)
    }catch(err){
        console.log(err)
    }
}

//append
//what and where(line no. 78).

function dishplayTable(data){
    //get a reference of loader

    //loader.style.display= null;
    document.getElementById("movies").innerHTML= null;
    // container.innerHTML= null;
    for(i=0;i<data.length;i++){
let div = document.createElement("div")
let image= document.createElement("img")
image.src= data[i].Poster
let name= document.createElement("p")
name.innerText= data[i].Title
let rating= document.createElement("p")
rating.innerText= data[i].Year

let book= document.createElement("button")
book.innerText= "Book this movie"
book.addEventListener("click", function(){
    btn()
})
    div.append(image,name,rating,book,)
    document.getElementById("movies").append(div)

    function btn(){
        console.log(name.innerText)
    }
}
}





//1. wrong url (wrong api key, spelling mistake)
//2. not writing async await


//steps to add loader:

//1. when you click on search movie button.