
let rand1 = Math.random();
let rand2 = Math.random();
let rand3 = Math.random();
// first section Adjective
if(rand1<=0.33){
    var num1 = "Crazy"
}else if (rand1<=0.66){
    var num1 = "Amazing"
}else{
    var num1 = "Fire"
}

//second section shop name
if(rand2<=0.33){
    var num2 = "Engine"
}else if (rand2<=0.66){
    var num2 = "Foods"
}else{
    var num2 = "Garments"
}

//Third section Another Word
if(rand3<=0.33){
    var num3 = "Bros"
}else if (rand3<=0.66){
    var num3 = "Limited"
}else{
    var num3 = "Hub"
}

alert("we created a Business name for your company which is : \n"+num1+num2+num3);
console.log(num1.concat(num2,num3));