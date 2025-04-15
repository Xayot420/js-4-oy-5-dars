import { add as plus, subtract as minus, multiply as times } from './calc.js';
import divide from './calc.js';

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById("addBtn").addEventListener("click", () => {
  result.textContent = plus(Number(num1.value), Number(num2.value));
});

document.getElementById("subBtn").addEventListener("click", () => {
  result.textContent = minus(Number(num1.value), Number(num2.value));
});

document.getElementById("mulBtn").addEventListener("click", () => {
  result.textContent = times(Number(num1.value), Number(num2.value));
});

document.getElementById("divBtn").addEventListener("click", () => {
  result.textContent = divide(Number(num1.value), Number(num2.value));
});
