const audio_list = [];
audio_list[0] = "./audio/pika.mp3";
audio_list[1]= "./audio/pika1.mp3";
audio_list[2]= "./audio/pika2.mp3";
audio_list[3]= "./audio/pika3.mp3";
audio_list[4]= "./audio/pika4.mp3";


const pic = []

pic[0] = "./pic/pic4.jpg"
pic[1] = "./pic/pic1.jpg"
pic[2] = "./pic/pic2.jpg"
pic[3] = "./pic/pic3.jpg"
pic[4] = "./pic/pic1.jpg"




let current_music = 0;
let btnpause = false;
function loop_music(){
    if( current_music == -1){
        current_music = audio_list.length-1;
    }else if (current_music == audio_list.length){
        current_music = 0;
    }else {

    }
}

const audio = document.createElement("audio");


async function music_control(){
    loop_music();
    pic_box.style.backgroundImage = `url("${pic[current_music]}")`
     audio.src = `${audio_list[current_music]}`
      await audio.play();
      
      
    const time =  setInterval(() => {
        console.log("music ends");
        
        const tempsrc = audio.src;
        if(audio.src == tempsrc && btnpause == false){
            current_music++;
            loop_music();
            pic_box.style.backgroundImage = `url("${pic[current_music]}")`
            audio.src = `${audio_list[current_music]}`
            audio.play();
        }else{
            clearInterval(time)
        }
     }, audio.duration*1000+500);
    
}



const left = document.querySelector(".left")
const pause = document.querySelector(".pause")
const right = document.querySelector(".right")
const volume = document.querySelector(".volume")
const pic_box = document.querySelector(".pic")

left.addEventListener("click", ()=>{
    current_music--;
    music_control()
})

pause.addEventListener("click", ()=>{
    if(audio.paused){
        btnpause = false;
        pause.style.backgroundImage = `url("./pic/play.png")`
        music_control();
        
    }else{
        audio.pause();
        btnpause = true;
        pause.style.backgroundImage = `url("./pic/pause.png")`
    }
})

right.addEventListener("click", ()=>{
    current_music++;
    music_control()
    
})

volume.addEventListener("click", ()=>{
   if(audio.muted){
    audio.muted = false
    volume.style.backgroundImage = `url("./pic/volume.png")`
   }else{
    audio.muted = true
    volume.style.backgroundImage = `url("./pic/mute.png")`
   }
   
   
})