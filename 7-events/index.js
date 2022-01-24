function appendLi(value, parent) {
  let newLi = document.createElement("li");
  newLi.innerText = value;
  parent.appendChild(newLi);
} // used in t. 1; 3;

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} // used in 5

// #1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

const ul1 = document.getElementById("ul1");
const input1 = document.getElementById("inp1");

input1.addEventListener("keydown", (e) => {
  appendLi(e.key, ul1);
});

// #2
// Вставить в html теги input и div (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

const div2 = document.getElementById("ul2");
const input2 = document.getElementById("inp2");

input2.addEventListener("keyup", () => {
  console.log(input2.value);
});

// #3
//Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const form = document.getElementById("form3");
const ul3 = document.getElementById("ul3");
const input3 = document.getElementById("inp3");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  appendLi(input3.value, ul3);
  input3.value = null;
});

// #4
// Калькулятор.
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.

const calcForm = document.getElementById("calcForm");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("op");
const result = document.getElementById("result");

calcForm.addEventListener("submit", (e) => {
  e.preventDefault();
  a = Number(num1.value);
  b = Number(num2.value);

  // 5.1 - if
  if (op.value === "+") {
    result.innerText = a + b;
  } else if (op.value === "-") {
    result.innerText = a - b;
  } else if (op.value === "*") {
    result.innerText = a * b;
  } else if (op.value === "/") {
    result.innerText = a / b;
  }

  // 5.2 - eval()
  result.innerText = eval(`${a} ${op.value} ${b}`);
});

// #5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке

const button = document.getElementById("haha");

button.addEventListener("mouseenter", () => {
  button.style.color = `rgb(${getRandomInteger(0, 255)},${getRandomInteger(
    0,
    255
  )},${getRandomInteger(0, 255)})`;
});

button.addEventListener("mouseleave", () => {
  button.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`;
});
