
//object var for faulty operations
let fault = {
    "+": "-",
    "-": "+",
    "*": "/",
    "/": "**"

}

//create random number
let rand = Math.random();


//inputs from user
let num1 = prompt("Enter your first number")
let operator = prompt("Enter your operator")
let num2 = prompt("Enter your second number")
 
// check if user entered invalid operator
if(operator== "/" || operator == "**" || operator == "*" || operator == "-" || operator == "+"){
        if(rand>0.1){
    let calc = eval(num1+operator+num2);
    alert(`The calculated value is ${calc}`);
  }else{
    operator = fault[operator];
    let calc = eval(num1+operator+num2);
    alert(`The calculated value is ${calc}`);
    }

} else{
    alert("Invalid operator")
   }
