let generate = document.querySelector(".generate");

generate.addEventListener("click", function () {
  const Chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~\\";

  let pass = "";
  for (let i = 0; i <= 12; i++) {
    let index = Math.floor(Math.random() * Chars.length);
    pass = pass + Chars[index];
  }
  let passtext = document.querySelector(".passtext");
  passtext.innerHTML = pass;

  let copyimg = document.querySelector(".copyimg");
  copyimg.addEventListener("click", function () {
    navigator.clipboard.writeText(pass);
    alert("Successfully copied");
  });
});
