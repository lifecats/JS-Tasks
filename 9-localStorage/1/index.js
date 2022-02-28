// технически, скучная версия нашего проекта с хакатона:)

const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("tasks");
const button = document.getElementById("allDoneButton");
let tasks = [];

// task 2
// все строчки с localStorage тоже относятся к заданию 2 :)
if (localStorage.tasks) {
  tasks = JSON.parse(localStorage.tasks);
  renderTasks();
}

function addLi(e) {
  const newLi = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = e.completed;
  checkbox.addEventListener("change", (e2) => {
    if (e2.target.checked === true) {
      e.completed = true;
      let filtered = tasks.filter(function (val) {
        return val != e;
      });
      filtered.push(e);
      tasks = filtered;
      localStorage.tasks = JSON.stringify(tasks);
      renderTasks();
    } else {
      e.completed = false;
      let filtered = tasks.filter(function (val) {
        return val != e;
      });
      filtered.unshift(e);
      tasks = filtered;
      localStorage.tasks = JSON.stringify(tasks);
      renderTasks();
    }
  });
  newLi.appendChild(checkbox);

  const text = document.createElement("span");
  text.innerText = e.task;
  text.style.textDecoration = e.completed ? "line-through" : "none";
  newLi.appendChild(text);

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", () => {
    let filtered = tasks.filter(function (val) {
      return val != e;
    });
    tasks = filtered;
    localStorage.tasks = JSON.stringify(tasks);
    renderTasks();
  });
  newLi.appendChild(button);
  ul.appendChild(newLi);
}

function renderTasks() {
  ul.innerHTML = null;
  tasks.forEach((e) => {
    addLi(e);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  tasks.unshift({ task: input.value, completed: false });
  localStorage.tasks = JSON.stringify(tasks);
  input.value = null;
  renderTasks();
});

button.addEventListener("click", () => {
  // получаеться, что у меня можно отметить через массив все готовыми, но я ниже написал через обход

  //* mark in array
  let newArr = [];
  tasks.forEach((e) => {
    e.completed = true;
    newArr.push(e);
  });
  tasks = newArr;
  localStorage.tasks = JSON.stringify(tasks);
  renderTasks();

  //* with querySelector()
  // document.querySelectorAll("li").forEach((elem) => {
  //   elem.style.textDecoration = "line-through";
  // });
});
