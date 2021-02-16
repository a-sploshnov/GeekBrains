"use strict";

/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch). */

let z;

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "sum":
      z = sum(arg1, arg2);
      break;
    case "minus":
      z = minus(arg1, arg2);
      break;
    case "times":
      z = times(arg1, arg2);
      break;
    case "divide":
      z = divide(arg1, arg2);
      break;
  }

}

function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function times(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

mathOperation(10, 15, "minus");
console.log(z);