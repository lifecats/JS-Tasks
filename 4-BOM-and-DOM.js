/* Задание 1

Выведите в консоль строку:
С помощью браузера ... я открыл страничку ... 
(необходимые значения добавьте с помощью BOM) */

console.log(
  `С помощью браузера ${window.navigator.userAgent}я открыл страничку ${window.location}`
);

/*
Задание 2

В файле html есть разметка:

<ul id="list">
<li>Джон</li>
<li>Пит</li>
<li>Джессика</li>
<li>Сара</li>
</ul>

Вывести в консоль каждое из имен (содержимое каждого li).*/

const li_arr = document.getElementById("list").children;

for (let i of li_arr) {
  console.log(i.innerHTML);
}

/*Задание 3
Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)*/
for (let i of li_arr) {
  i.innerHTML = li_arr.indexOf(i);
}

/* 
Задание 4

Написать функцию, которая принимает на вход 3 параметра: 
название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, 
добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких 
сгенерированных тегов в консоль, затем отправить их на страницу.*/

function appendNewTag(tag, color, body) {
  let el = document.createElement(tag);
  el.style.color = color;
  el.innerHTML = body;
  document.body.appendChild(el);
}

/*
Задание 5
Создать с помощью js абзац (тег p). Добавить в него контент.
 Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу. */

const body = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget sit amet tellus cras adipiscing enim eu turpis egestas. Vulputate odio ut enim blandit volutpat maecenas volutpat. Egestas dui id ornare arcu odio ut sem. Vestibulum lorem sed risus ultricies tristique nulla. Sit amet nulla facilisi morbi tempus iaculis. Cursus sit amet dictum sit amet. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Tristique senectus et netus et malesuada fames ac turpis. Urna et pharetra pharetra massa. Interdum velit laoreet id donec ultrices. Faucibus purus in massa tempor nec. Eu non diam phasellus vestibulum. Vitae aliquet nec ullamcorper sit amet. Dictum non consectetur a erat. Tortor pretium viverra suspendisse potenti nullam ac.

 Odio aenean sed adipiscing diam donec adipiscing tristique. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Lorem donec massa sapien faucibus et molestie. Nulla malesuada pellentesque elit eget gravida cum. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Odio pellentesque diam volutpat commodo sed. At elementum eu facilisis sed odio morbi quis commodo. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Risus nec feugiat in fermentum posuere urna. Erat imperdiet sed euismod nisi porta. Sagittis purus sit amet volutpat consequat. Nunc non blandit massa enim nec. Sit amet aliquam id diam maecenas ultricies. Facilisis gravida neque convallis a.
 
 Fringilla ut morbi tincidunt augue interdum velit euismod in. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Id faucibus nisl tincidunt eget nullam non nisi. Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Consequat ac felis donec et odio. Dignissim diam quis enim lobortis scelerisque. Ullamcorper sit amet risus nullam. Sem fringilla ut morbi tincidunt augue. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Facilisi morbi tempus iaculis urna id. Lectus quam id leo in vitae turpis. Vitae aliquet nec ullamcorper sit amet risus nullam. Sit amet mauris commodo quis. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus et. Nunc mattis enim ut tellus elementum sagittis.
 
 Erat velit scelerisque in dictum non consectetur a erat. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Lectus proin nibh nisl condimentum id venenatis a. Tellus id interdum velit laoreet id donec ultrices. Odio facilisis mauris sit amet massa vitae. Diam maecenas sed enim ut sem viverra aliquet. Sit amet facilisis magna etiam. Fermentum dui faucibus in ornare. Lobortis feugiat vivamus at augue eget arcu dictum. Cursus eget nunc scelerisque viverra mauris in.
 
 Enim nec dui nunc mattis enim ut tellus elementum sagittis. Lectus urna duis convallis convallis tellus id. Mi eget mauris pharetra et ultrices neque ornare. Enim praesent elementum facilisis leo vel fringilla est ullamcorper eget. Dis parturient montes nascetur ridiculus. Nec sagittis aliquam malesuada bibendum arcu. Duis tristique sollicitudin nibh sit amet commodo nulla. Leo integer malesuada nunc vel risus commodo viverra. Iaculis at erat pellentesque adipiscing commodo elit. Nisi porta lorem mollis aliquam. Sagittis orci a scelerisque purus semper eget. Faucibus turpis in eu mi bibendum neque egestas congue.`;

let el = document.createElement("p");
el.innerHTML = body;
el.style.fontSize = "36px";
el.style.fontWeight = "bold";
document.body.appendChild(el);

/*Задание 6
Вставить в страницу (в html документ) тег <select>.
С помощью js добавить в этот select опции (option) под годы от 1960 по 2020. */

let el = document.createElement("select");

for (let i = 1960; i <= 2021; i++) {
  let option = document.createElement("option");
  option.innerHTML = String(i);
  el.appendChild(option);
}

document.body.appendChild(el);

/*
Задание 7

Вставить в страницу (в html документ) ul.
Предусмотреть в коде следующий массив:
*/ let arr = [
  {
    name: "Женя",
    order: true,
  },
  {
    name: "Кристина",
    order: true,
  },
  {
    name: "Павел",
    order: false,
  },
  {
    name: "Виолетта",
    order: false,
  },
  {
    name: "Костя",
    order: true,
  },
];

/* Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
- Клиент Женя оплатил заказ
- Клиент Павел отменил заказ
... остальные li с контентом

Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
 */

let el = document.createElement("ul");
for (let i of arr) {
  let newEl = document.createElement("li");
  newEl.innerHTML = `Клиент ${i.name} ${i.order ? "оплатил" : "отменил"} заказ`;
  el.appendChild(newEl);
}

document.body.appendChild(el);

/*
Задание 8

Есть массив ссылок:*/
let linksArr = [
  "https://www.onliner.by/",
  "https://www.youtube.com/",
  "https://vk.com/",
  "https://www.google.com/",
  "https://yandex.ru/",
];
/* Вам нужно:
1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
Вкладывать ссылки в див нужно с помощью метода appendChild или append.
3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
 */

let div = document.createElement("div");
div.style.background = "#2d2e44";
div.style.padding = "10px";

for (let i of linksArr) {
  let link = document.createElement("a");
  link.setAttribute("href", i);
  link.setAttribute("target", "_blank");
  link.innerHTML = i;
  div.appendChild(link);
}

document.body.appendChild(div);

/*
Задание 9
Добавить к нескольким тегам на странице класс "forRemove". 
Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()
 */

let rmElems = document.getElementsByClassName("forRemove");

for (let i of rmElems) {
  i.remove();
}

/*
Задание 10*
Создать массив объектов с полями name, age. Создать html таблицу с двумя колонками,
заполненную этими объектами. Name должно быть красного цвета, age - синего. */

const arr = [
  { name: "Lorem", age: 5 },
  { name: "Ipsum", age: 23 },
  { name: "Dolor", age: 7 },
];

const table = document.createElement("table");
for (let i of arr) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerHTML = i.name;
  td1.style.color = "red";
  tr.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerHTML = i.age;
  td2.style.color = "blue";
  tr.appendChild(td2);
  table.appendChild(tr);
}
