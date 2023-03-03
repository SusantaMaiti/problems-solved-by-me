




let arr= [{name: "hero", image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg", rating:2 },{name: "hero", image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg", rating:4 },{name: "hero", image:"https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg", rating:4 },
{name: "hero", image:"https://s.yimg.com/uu/api/res/1.2/0GBXd289dMqVEPaqTl4x5w--~B/aD0xNTAwO3c9MTAzNTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5", rating:4 },
{name: "hero", image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c618cd88432989.5dd5e72e505d1.jpg", rating:1 }
]

function dishplayTable(arr){
    let datadiv= document.getElementById("basic")
    datadiv.innerHTML= null;
    datadiv.id = "movie";
    for(i=0;i<arr.length;i++){
let div= document.createElement("div")
let img= document.createElement("img")
img.src= arr[i].image;
let name= document.createElement("p")
name.innerText= arr[i].name;
let rating= document.createElement("p")
rating.innerText= arr[i].rating;



div.append(img,name,rating)


        document.getElementById("movies").append(div)
    }
}





let data_promise= new Promise(function(resolve,reject){
    setTimeout(() => {
        let data= arr
        if(arr!=null){
            resolve(data)
        }else{
            reject(`err: server could not found`)
        }
        
    }, 3000);
})
data_promise.then(function(res){
    dishplayTable(res)
})
.catch(function (err){
    console.log(err)
})



let id;

function Start(){

    let i=0;
    let container= document.getElementById("container")
    container.innerHTML= null;
    let img= document.createElement("img")
    img.src= arr[0].image
    container.append(img)
    i++
    id = setInterval(function(){
        if(i==arr.length){
            i=0;
        }
        img.src= arr[i].image
        container.append(img)
        i++
    }, 1000)

}
function Stop(){
    clearInterval(id)
}