"use strict";

// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let isPrime = function (num) {
    let i = 2;

    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return num > 1;
}

let primesList = function (int) {
    let arrPrimes = [];
    let z = 2;

    while (z <= int) {
        if (isPrime(z)) {
            arrPrimes.push(z);
        }
        z++;
    }

    return arrPrimes;
}

primesList(100);