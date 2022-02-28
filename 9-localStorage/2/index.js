let arr = document.querySelectorAll("img");

if (localStorage.getItem("bg") == null)
  localStorage.setItem("bg", arr[0].getAttribute("src"));

const currentBg = localStorage.getItem("bg");
document.body.style.backgroundImage = `url('${currentBg}')`;

arr.forEach((el) => {
  if (currentBg === el.getAttribute("src")) el.classList.add("selected");
  el.addEventListener("click", () => {
    if (!el.classList.contains("selected")) {
      arr.forEach((elem) => {
        elem.classList.remove("selected");
      });
      localStorage.setItem("bg", el.getAttribute("src"));
      document.body.style.backgroundImage = `url('${el.getAttribute("src")}')`;
      el.classList.add("selected");
    } else el.classList.remove("selected");
  });
});
