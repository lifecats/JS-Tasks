let overlay = document.getElementsByClassName("overlay")[0];
let button1 = document.getElementById("open");

button1.addEventListener("click", () => {
  overlay.classList.add("open");
});

window.addEventListener("click", (e) => {
  if (e.target.id === "close-trigger") {
    overlay.classList.remove("open");
  }
});
