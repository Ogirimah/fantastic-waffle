//  Declare the variables
let firstNumber = secondNumber = sign = null;

//  Get input from the user
firstNumber = parseFloat(prompt("Input first number here: "));
sign = prompt("Input one of (+, -, * 0r /): ");
secondNumber = parseFloat(prompt("Input second number here: "));

//  Switch between calculation signs to produce result based on input sign

switch (sign) {
  case "+":
    let result = firstNumber + secondNumber;
    alert("Result is : " + result);
    break;
  case "-":
    alert("Result is : " + (firstNumber - secondNumber));
    break;
  case "*":
    alert("Result is : " + (firstNumber * secondNumber));
    break;
  case "/":
    alert("Result is : " + (firstNumber / secondNumber));
    break;
}