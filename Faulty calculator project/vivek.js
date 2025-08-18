//different functions to perform different calculations
function sum(num1, num2) {
    const sum = num1+num2;
    alert("The sum value of two number are "+sum);
}
function sub(num1, num2) {
    const sub = num1-num2;
    alert("The subtract value of two number are "+sub);
}
function mul(num1, num2) {
    const mul = num1*num2;
    alert("The multiplication value of two numbers are "+ mul)
}
function div(num1, num2) {
    const div = num1/num2;
    alert("The division value of two number are "+div);
}
function exponent(num1, num2) {
    const expo = num1**num2;
    alert("The exponent value of two number are "+expo);
}
 // if rand is less than or equal to 0.1 then it perform faulty calculation 
 // and rest of the time it perform correct calculation
let rand = Math.random();

//user inputs
let num1 = parseInt(prompt("Enter your first number"));
let operator = prompt("Enter your operator");
let num2 = parseInt(prompt("Enter you second number"));

// check if user entered valid operator 
if(operator== "/" || operator == "**" || operator == "*" || operator == "-" || operator == "+"){
    // compare user operrator and rand value
    if(operator== "*" && rand>0.1){
        mul(num1,num2);
        
    }else if(operator== "**" && rand>0.1){
        exponent(num1,num2);
        
    }else if(operator== "+" && rand>0.1){
        sum(num1,num2);
        
    }else if (operator== "-" && rand>0.1){
        sub(num1,num2);
      
    }else if (operator== "/" && rand>0.1){
        div(num1,num2);
       
    }else if(operator== "*" && rand<=0.1){
        div(num1,num2);
     
    }else if(operator== "**" && rand<=0.1){
        mul(num1,num2);
       
    }else if(operator== "+" && rand<=0.1){
        sub(num1,num2);
     
    }else if(operator== "-" && rand<=0.1){
        sum(num1,num2);
       
   }else{
           exponent(num1,num2); 
          
     }
}else{
        alert("Invalid operator")
 }    