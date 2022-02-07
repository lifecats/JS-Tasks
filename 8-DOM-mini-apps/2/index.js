const close = document.getElementById("close");
const open = document.getElementById("open");
const menu = document.getElementsByClassName("menu")[0];
const main = document.getElementsByClassName("main")[0];

close.addEventListener("click", () => {
  menu.classList.remove("menuOpen");
  main.classList.remove("mainOpen");
  open.style.visibility = "visible";
});

open.addEventListener("click", () => {
  menu.classList.add("menuOpen");
  main.classList.add("mainOpen");
  open.style.visibility = "hidden";
});
