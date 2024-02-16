const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let displayValue = "";
let num1 = "";
let num2 = "";
let num1Flag = true;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.className === "digit") {
      displayValue += e.target.textContent;
      display.textContent = displayValue;
      if (num1Flag) {
        num1 = displayValue;
      } else {
        num2 = displayValue;
      }
    } else if (e.target.className === "operation") {
      num1Flag = false;
      displayValue = "";
      display.textContent = displayValue;
    }
    console.log(num1, num2, num1Flag);
  });
});

const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => {
  return num2 !== 0 ? num1 / num2 : "Error";
};

const operate = (operator, num1, num2) => {
  switch (operator) {
    case "add":
      return add(num1, num2);
      break;
    case "substract":
      return substract(num1, num2);
      break;
    case "multiply":
      return multiply(num1, num2);
      break;
    case "divide":
      return divide(num1, num2);
      break;
    default:
      return "operation not found";
      break;
  }
};
