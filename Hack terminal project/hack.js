
let clearu = [];
async function step1(name,randu){
    return new Promise((resolve, reject) => {
        let s1 = document.createElement("h1")
        s1.textContent = `${name}`
        document.body.append(s1)
        let count = 0;
        clearu.push(setInterval(() => {
            count++;
          console.log(count)
            
            if(count<5){
                s1.textContent = s1.textContent + "."
            }else{
                s1.textContent = `${name}`
                resolve("done")
                count = 0;  
            }
        }, randu*1000))

    })
}

 async function main() {
    let heck = ["heck start","virus inject","hacked File","send files to servver","files delete start","files delete complete"]
      let max =2;
      let min =5;
       
      //wait for each func to complete then run another func
     for(i=0;i<heck.length;i++){
        let rand = Math.floor(Math.random()*(max-min+1))+min
        await step1(heck[i],rand);
     }
         

     //clear intervals
     for (let index = 0; index <clearu.length; index++) {
        clearInterval(clearu[index]);
       
        
     }
     
 }
     main();

