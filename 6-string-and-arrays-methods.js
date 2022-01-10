// #1 Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1, str.length + 1);
}

// #2 Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str) {
  let lcString = str.toLowerCase();

  if (
    lcString.includes("badword") === true ||
    lcString.includes("xxx") === true
  )
    return false;
  else return true;
}

// #3 Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»

function reverse(str) {
  let strArr = str.split("");
  return strArr.reverse().join("");
}

//#4
// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком.
let stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",

  "GNF576746573fhdg4737dh4;Greenfield",

  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",

  "SYB4f65hf75f736463;Stalybridge",

  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
];

// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

stations.forEach((e) => {
  let code = e.slice(0, 3);
  let name = e.slice(e.indexOf(";") + 1, e.length);
  console.log(code + ": " + name);
});

// #4.1 - вывести значения в виде li на странице
let newUl = document.createElement("ul");

stations.forEach((e) => {
  let code = e.slice(0, 3);
  let name = e.slice(e.indexOf(";") + 1, e.length);

  let newLi = document.createElement("li");
  newLi.textContent = code + ": " + name;
  newUl.appendChild(newLi);
});

// #5
// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique(arr) {
  let uniqueElems = [];
  for (let e of arr) {
    uniqueElems.includes(e) ? null : uniqueElems.push(e);
  }
  return uniqueElems;
}
