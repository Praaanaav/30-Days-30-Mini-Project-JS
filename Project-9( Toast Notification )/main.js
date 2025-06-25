const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
let body = document.querySelector("body");

btn1.addEventListener("click", () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "Success";
  body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
});
btn2.addEventListener("click", () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "Error";
  body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
});
btn3.addEventListener("click", () => {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = "Invalid";
  body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
});
