// Задание 1 - Спросить и вывести имя

const userName = Number(prompt("What is your name?"));
alert("Hello," + userName);

// Задание 2 - Возвести число в степень

const number = Number(prompt("Какое число?"));
const power = Number(prompt("В какую степень надо возвести?"));
alert(number ** power);

// Задание 3 - Какое из чисел больше?

const number1 = Number(prompt("Введите первое число"));
const number2 = Number(prompt("Введите второе число"));

if (number1 == number2) {
  alert("Два одинаковых числа!");
} else if (number1 > number1) {
  alert(number1 + " больше!");
} else {
  alert(number2 + " больше!");
}
// Задание 4 - Кратно ли число
if (number1 % number2 == 0) {
  console.log(number1 + " кратно " + number2);
} else {
  console.log(number1 + " не кратно " + number2);
}

// Задание 5

let number3 = 3;
for (let i = 0; i < 10; i++) {
  number3++;
}
console.log(number3);

// Задание 6 - равно ли число 10

for (let i = 0; i < 10; i = i + 2) {
  if (Number(prompt("Число")) == 10) {
    console.log("Равно!");
  } else {
    console.log("Не равно!");
  }
}

// Задание 7 - Возвести в квадрат числа до 100

const count = Number(prompt("Сколько чисел возвести в квадрат?"));
if (count >= 100) {
  console.log("Слишком много чисел!!");
} else {
  for (let i = 0; i < count; i++) {
    console.log(i ** 2);
  }
}

// Задание 8 - FizzBuzz

for (let i = 0; i < 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
