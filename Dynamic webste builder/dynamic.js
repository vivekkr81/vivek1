

function createcard(pic, duration, title, cname, views, old){

    //pic handle
    let pio = document.querySelector(".pic");
    pio.style.backgroundImage = `url("${pic}")`;
    pio.style.backgroundSize = "cover"
    pio.style.backgroundRepeat = "no-repeat"
    pio.style.backgroundPosition = "center"


    //duration handle
    let dio = document.querySelector(".duration")
    dio.textContent = `${duration}`

    //title handle
    let tit = document.querySelector(".title")
    tit.textContent = `${title}`

    //channel name handel
    let channel = document.querySelector(".cname")
    channel.textContent = `${cname}`
    
    //views handle
    let vio = document.querySelector(".views")
    vio.textContent = `${views}`

    // view old handle
    let ola = document.querySelector(".old")
    ola.textContent = `${old} months ago`

}

let picu = "pic/boat.jpg"
let duru = "14:20"
let titu = "Welcome to my channel | Let's learn Web Development"
let cnamo = "Vivek Web Dev"
let view = 100000
let oldu = "1"

//add k or m or b to view and shortform 
 if(view<=999){
       view = `${view} views`
 }else if (view<=999999){
       view = view/1000
       view = `${view}K views`
 }else if(view<=999999999){
    view = view/1000
       view = `${view}M views`
 }else{
          view = view/1000
          view = `${view}B views`
 }
 
 //call fun and pass values
 createcard(picu,duru,titu,cnamo,view,oldu)
