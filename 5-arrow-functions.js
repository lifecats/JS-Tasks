/*
Задание 1
Дан объект:
let user = { name: 'Tom', age: 20, isMarried: false }
Cформировать массив строк вида "имя_поля - значение_поля":
['name - Tom', 'age - 20', 'isMarried - false']
Реализовать это в виде функции, которая принимает объект и возвращает массив. Использовать цикл for-in
*/

let user = { name: "Tom", age: 20, isMarried: false };
let newArr = [];
for (let prop in user) {
  newArr.push(`${prop} - ${user[prop]}`);
}
/*

Задание 2.1
Написать функцию, которая принимает два параметра и складывает их.
Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке

Примеры результатов вызова функции:
sum(2,4); // 6
sum('d',4); // введенные данные не являются числами
sum(1, [2]); // введенные данные не являются числами
sum(1); // введите два параметра
sum(); // введите два параметра


Задание 2.2
Доработать задание 2.1 с проверкой на вызов функции без аргументов или с одним аргументом.
sum(1)// введите два параметра
sum() // введите два параметра

*/

function sum() {
  if (arguments.length !== 2) return "Введите два числа";
  else {
    if (typeof arguments[0] !== "number" && typeof arguments[1] !== "number")
      return "Введите два ЧИСЛА!";
    else return arguments[0] + arguments[1];
  }
}

/*
Задание 3

Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
Написать функцию в стрелочном синтаксисе.
*/

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const guessTheNumber = (num1) => {
  if (num1 > 10 || num1 < 0) return "Введите число от 1 до 10";
  else {
    let answer = getRandomInteger(0, 10);
    if (answer == num1) return "Вы выйграли!!";
    else return "Вы не угадали, ваше число - " + answer;
  }
};

/*
Задание 4
Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал
Используйте подходящий метод массива.
*/

const copyArr = (arr) => {
  return arr.map((e) => e);
};

/*
Задание 5
На странице в html задать список элементов li с числами.
Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив.
Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить 
эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of
(forEach работать не будет). */

const li = document.getElementsByTagName("li");

let arr = [];
for (let i of li) {
  if (i.innerText % 2 == 0) {
    arr.push(i);
  }
}

arr.forEach((e) => {
  const newLi = document.createElement("ul");
  newLi.innerText = e.innerText;
  document.getElementsByTagName("ul")[0].appendChild(newLi);
});

/* 
Задание 6
Создать разметку формы с инпутом для текста и селектом для категории 
(добавить несколько option с текстом Категория 1,
Категория 2, Категория 3).
Под формой должны должен быть список ul. 
В этот список каждую секунду добавляется новый элемент li
с произвольным текстом (напр. Hello).
Для этого можно использовать функцию
setInterval https://learn.javascript.ru/se...
Вся разметка должна быть создана джаваскриптом.
В HTML в начале body должен быть пустой.*/

const form = document.createElement("form");
const input = document.createElement("input");
const select = document.createElement("select");
const ul = document.createElement("ul");

function createOption(i) {
  const option = document.createElement("option");
  option.innerText = "Категория " + i;
  select.appendChild(option);
}

for (let i = 1; i < 4; i++) {
  createOption(i);
}

input.setAttribute("type", "text");
ul.setAttribute("id", "ul");

form.appendChild(select);
document.body.appendChild(form);
document.body.appendChild(ul);

setInterval(() => {
  const newLi = document.createElement("li");
  newLi.innerText = "Hello World";
  document.getElementById("ul").appendChild(newLI);
}, 1000);
