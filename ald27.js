//1

let num = 20;
let strg = "FAE";
let bool = true;

console.log(num, typeof num);
console.log(strg, typeof strg);
console.log(bool, typeof bool);

//2

let a = 20;
let b = 5;

console.log("Сумма:", a + b);
console.log("Разность:", a - b);
console.log("Произведение:", a * b);
console.log("Частное:", a / b);

//3

let voz = 42;

if (voz < 18){
    console.log("Доступ запрещён");
}else {
    console.log("Доступ разрешён");
}

//4

let numb = "52";

if (typeof numb === "number") {
    console.log("Это число");
} else if (typeof numb === "string") {
    console.log("Это строка");
} else if (typeof numb === "boolean") {
    console.log("Это логическое значение");
} else {
    console.log("Неизвестный тип");
}

//5

let day = 3;

switch (day) {

    case 1: console.log("Понедельник"); break;
    case 2: console.log("Вторник"); break;
    case 3: console.log("Среда"); break;
    case 4: console.log("Четверг"); break;
    case 5: console.log("Пятница"); break;
    case 6: console.log("Суббота"); break;
    case 7: console.log("Воскресенье"); break;
    default: console.log("Неверный номер дня");

}

//6

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//7

let zxc = 0;
for (let i = 1; i <= 100; i++) {
    zxc = zxc + i;
}
console.log("Сумма чисел от 1 до 100:", zxc);

//8

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " — чётное");
    } else {
        console.log(i + " — нечётное");
    }
}

//9

let counter = 10;
while (counter >= 1) {
    console.log(counter);
    counter--;
}

//10

let password;
do {
    password = "admin";
    console.log("Введите пароль");
} while (password !== "admin");

console.log("Пароль верный!");