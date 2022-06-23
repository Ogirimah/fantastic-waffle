
//  Get input from the user
let firstNumber = secondNumber = sign = null;
while (true) {
  firstNumber = parseFloat(prompt("Input first number here: "));

  try {
    if (firstNumber == "") throw "is empty";
    if (isNaN(firstNumber)) throw "is not a number";
  }
  catch (err) {
    console.log("Error: Input " + err + ". Try again.");
  }
  finally {
    if (!isNaN(firstNumber)) {
      break;
    }
  }
}
console.log(firstNumber);
const operators = ["+", "-", "*", "/"];

while (true) {
  sign = prompt("Input one of (+, -, * 0r /): \n" + firstNumber);

  if (operators.includes(sign)) {
    break;
  }
  else
    console.log("Error, try again. Input +, _, *. or /");
  console.log(firstNumber, sign);
}
console.log(firstNumber + sign);
while (true) {
  secondNumber =
    parseFloat(prompt("Input second number here: \n " + secondNumber + sign));

  try {
    if (firstNumber == "") throw "is empty";
    if (isNaN(secondNumber)) throw "is not a number";
  }
  catch (err) {
    console.log("Error: Input " + err + ". Try again.");
  }
  finally {
    if (!isNaN(secondNumber)) {
      break;
    }
  }
}
console.log(firstNumber + sign + secondNumber)

switch (sign) {
  case "+":
    console.log("Result is : " + (firstNumber + secondNumber));
    break;
  case "-":
    console.log("Result is : " + (firstNumber - secondNumber));
    break;
  case "*":
    console.log("Result is : " + (firstNumber * secondNumber));
    break;
  case "/":
    console.log("Result is : " + (firstNumber / secondNumber));
    break;
  default:
    console.log("Thanks for using our calculator")
}