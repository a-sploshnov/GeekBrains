"use strict";

// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.

let a = Number(prompt("Введите любое числовое значение",));
let b = Number(prompt("Введите любое числовое значение",));

// если a и b положительные, вывести их разность (ноль можно считать положительным числом);
if (a >= 0 && b >= 0) {
  console.log(a - b);
}
// если а и b отрицательные, вывести их произведение;
else if (a < 0 && b < 0) {
  console.log(a * b);
}
// если а и b разных знаков, вывести их сумму;
else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
  console.log(a + b);
}
