const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let displayValue = "";
let num1 = "";
let num2 = "";
let num1Flag = true;
let currOperator = "=";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(
    //   `dig -- num1: ${num1}, num2: ${num2}, displayValue: ${displayValue}, num1Flag: ${num1Flag}, currOperator: ${currOperator}`
    // );
    console.log(e.target.textContent);
    if (e.target.className === "digit") {
      if (num1Flag) {
        num1 += e.target.textContent;
        displayValue = num1;
        display.textContent = displayValue;
      } else {
        num2 += e.target.textContent;
        displayValue = num2;
        display.textContent = displayValue;
      }
    } else if (e.target.className === "operation") {
      if (num1Flag) {
        if (e.target.textContent === "=") {
          displayValue = num1;
          display.textContent = displayValue;
          currOperator = e.target.textContent;
          num1Flag = true;
        } else {
          displayValue = num1;
          display.textContent = displayValue;
          currOperator = e.target.textContent;
          num1Flag = false;
        }
      } else {
        if (e.target.textContent === "=") {
          displayValue = operate(currOperator, num1, num2);
          display.textContent = displayValue;
          num1 = displayValue;
          num2 = "";
          currOperator = e.target.textContent;
          num1Flag = true;
        } else {
          displayValue = operate(currOperator, num1, num2);
          display.textContent = displayValue;
          num1 = displayValue;
          num2 = "";
          currOperator = e.target.textContent;
          num1Flag = false;
        }
      }
    }
  });
});

const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return substract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
      break;
    default:
      return "operation not found";
      break;
  }
};

const add = (num1, num2) => (parseFloat(num1) + parseFloat(num2)).toString();
const substract = (num1, num2) =>
  (parseFloat(num1) - parseFloat(num2)).toString();
const multiply = (num1, num2) =>
  (parseFloat(num1) * parseFloat(num2)).toString();
const divide = (num1, num2) => {
  return num2 !== 0
    ? (parseFloat(num1) / parseFloat(num2)).toString()
    : "Error";
};
