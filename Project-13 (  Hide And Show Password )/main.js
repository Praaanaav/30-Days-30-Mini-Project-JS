const eye = document.querySelector(".eye");
const pass = document.querySelector(".pass");

eye.addEventListener("click", () => {
  if (pass.type == "password") {
    pass.type = "text";
    eye.src = "./img/eye.png";
  } else {
    eye.src = "./img/hidden.png";
    pass.type = "password";
  }
  console.log("Hello");
});
