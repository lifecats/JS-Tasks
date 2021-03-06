/*
Задание 1

Задайте в коде переменную n с числовым значением.
1) с помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
2) с помощью логического ИЛИ в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
*/

if (!(n >= 0 && i <= 100)) {
}
if (n < 100 || n > 0) {
}

/*
Задание 2

Создайте объект с именами и заработными платами */
const engineers = {
  Den: 1000,
  Matt: 5000,
  Steve: 2000,
};
/* Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:
Заработная плата ххх составляет ххх рублей.
*/

for (let prop in engineers) {
  console.log(`Заработная плата ${prop} составляет ${engineers[prop]} рублей.`);
}

/*
Задание 3
Создать массив из 5 элементов. */
const arr = ["lorem", "ipsum", "dolor", "sit", "amet"];
/* Используя цикл for, вывести каждый второй элемент массива в консоль.
 */

for (let i = 0; i < arr.length; i = i + 2) {
  console.log(arr[i]);
}

/* 
Задание 4

Есть массив произвольных чисел: */
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
/* Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
Индексу 0 соответствует число 42
Индексу 1 соответствует число 65
и т.д.
*/

for (let i = 0; i < numbers.length; i++) {
  console.log(`Индексу ${i} соответствует число ${numbers[i]}`);
}

/*
Задание 5
Есть массив произвольных чисел:
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]  [я определил его уже выше]
1) Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
2) Посчитать и вывести в консоль сумму элементов в массиве.
Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).
3) Посчитать и вывести в консоль сумму четных элементов в массиве.
4) Найти и вывести в консоль максимальное число массива.
Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.
5) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.
*/

// 1.1
for (let i = 0; i < numebrs.length; i++) {
  console.log(numbers[i]);
}

// 1.2
for (let i of numbers) {
  console.log(i);
}

//2
let sum = 0;

for (let i of numbers) {
  sum = sum + i;
}

// 3
let sum2 = 0;

for (let i of numbers) {
  if (!(i % 2)) {
    sum2 = sum2 + i;
  }
}

// 4
let max = 0 - Infinity;

for (let i of numbers) {
  if (i > max) {
    max = i;
  }
}
console.log(max);

// 5
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === max) {
    console.log(i);
  }
}

/*
Задание 6

Определить массив */ let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
/* В цикле создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
Подсказка. Изначально нужно объявить пустой массив-хранилище (например, let newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.
*/

let newArr = [];

for (let i of arr) {
  if (i > 0) {
    newArr.push(i);
  }
}

/* 
Задание 7

Определить массив, например */ let nums = [5, 4, 3, 8, 0];
/* и переменную */ let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.

let newArr = [];

for (let i of nums) {
  if (i >= limit) newArr.push(i);
}

/*
Задание 8

Описать массив из объектов с двумя полями: строковым и числовым.*/
const users = [
  { name: "Vasya", age: 23 },
  { name: "Olya", age: 12 },
];

//Пройти в цикле по массиву и вывести строковое поле каждого объекта, если его числовое поле больше 10.

for (let i of users) {
  if (i.age > 10) {
    console.log(i.name);
  }
}

/*
Задание 9*

Задать массив слов. Например: */
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
/*1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова):
[{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
Вывести этот массив в консоль.
Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к. слово text состоит из 4 символов)
2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"
*/

// 1
let newArr = [];

for (let i of vegetables) {
  newArr.push({ word: i, length: i.length });
}

//2         упс, забыл)

for (let i of newArr) {
  console.log(`${i} - ${i.length}`);
}
