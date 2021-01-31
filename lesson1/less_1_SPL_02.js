"use strict";

/*2. Работа с переменными.
a) Объявить две переменные: admin и name. Записать в name строку «Василий»;
b) Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»). */

var admin;
var name = "Василий";

admin = name;
console.log(admin);

/* 4. *Чему будет равно JS-выражение 1000 + "108"?
    Ответ: 1000108 - приоритет унарного оператора "+" выше, чем приоритет оператора сложения "+".

5. *Самостоятельно разобраться с атрибутами тега script (async и defer).
    Эти атрибуты используются для асинхронной(одновременной) загрузки скриптов и самой страницы.
    - Async - первым выполнится тот скрипт, который загрузился первым.
    - Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда он загрузится.
      Скрипты с defer никогда не блокируют страницу.
*/