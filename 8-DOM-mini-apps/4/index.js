// технически, скучная версия нашего проекта с хакатона:)

const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("tasks");
let tasks = [];

function renderTasks() {
  ul.innerHTML = null;
  tasks.forEach((e) => {
    const newLi = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = e.completed;
    checkbox.addEventListener("change", (e2) => {
      if (e2.target.checked === true) {
        e.completed = true;
        var filtered = tasks.filter(function (val) {
          return val != e;
        });
        filtered.push(e);
        tasks = filtered;
        renderTasks();
      } else {
        e.completed = false;
        var filtered = tasks.filter(function (val) {
          return val != e;
        });
        filtered.unshift(e);
        tasks = filtered;
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
      var filtered = tasks.filter(function (val) {
        return val != e;
      });
      tasks = filtered;
      renderTasks();
    });
    newLi.appendChild(button);
    ul.appendChild(newLi);
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  tasks.unshift({ task: input.value, completed: false });
  input.value = null;
  renderTasks();
});
