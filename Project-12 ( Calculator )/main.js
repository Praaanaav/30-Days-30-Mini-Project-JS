const inputBox = document.querySelector(".inputBox");
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnValue = button.innerText;

    if (btnValue === "AC") {
      inputBox.value = "";
    } else if (btnValue === "DEL") {
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (btnValue === "=") {
      try {
        inputBox.value = eval(inputBox.value);
      } catch (error) {
        inputBox.value = "Error";
      }
    } else {
      inputBox.value += btnValue;
    }
  });
});
