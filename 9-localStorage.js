// #2 - 1)
// Задать объект с полем name.
// Задать переменную, которая будет хранить JSON упомянутого объекта.
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.

// 2)
// Создать переменную user, в которой хранится объект.
// Записать переменную в localStorage.
// Создать переменную newUser, в которой будет храниться JS объект из localStorage.

//2.1
const obj = { name: "Aether" };
const objJSON = JSON.parse(obj);
const objStr = JSON.stringify(obj);

//2.2
const user = { name: "Aether", age: 17, hasSibling: false };
localStorage.setItem("user", JSON.stringify(user));
const newUser = JSON.parse(localStorage.getItem("user"));
