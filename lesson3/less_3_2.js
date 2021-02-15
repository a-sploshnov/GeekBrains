"use strict";

//  Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине

let arr = [1800, 2300, 5200, 738, 999, 2999, 850, 7500];
let sumArr = 0;

// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(array) {
    for (let i = 0; i < array.length; i++) {
        sumArr += array[i];
    }
    return sumArr;

}

console.log(countBasketPrice(arr));


