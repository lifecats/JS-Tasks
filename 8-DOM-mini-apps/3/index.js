const button = document.getElementById("menu");
const menu = document.getElementById("menuBox");
let menuOpen = false;
function check() {
  button.innerHTML = menuOpen ? "X" : "☰";
  menu.style.visibility = menuOpen ? "visible" : "hidden";
}
button.addEventListener("click", () => {
  menuOpen = !menuOpen;
  check();
});

check();
