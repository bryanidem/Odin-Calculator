const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
let displayValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.className === "digit") {
      displayValue += e.target.textContent;
      display.textContent = displayValue;
    }
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
