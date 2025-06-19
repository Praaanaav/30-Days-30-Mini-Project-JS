let btn = document.querySelector(".searchbtn");
let inp = document.querySelector(".searchtxt");

inp.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    tasking();
  }
});

btn.addEventListener("click", tasking);

function tasking() {
  if (inp.value === "") {
    alert("Enter the task");
    return;
  }
  let tasklist = document.querySelector(".tasklist");
  let task = document.createElement("div");
  task.classList.add("task");

  let checkbox = document.createElement("div");
  checkbox.classList.add("checkbox");

  let check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("check");

  let para = document.createElement("p");
  para.classList.add("tasktext");
  para.innerText = inp.value;

  let im = document.createElement("img");
  im.classList.add("taskimg");
  im.src = "./img/x.png";

  checkbox.appendChild(check);
  task.appendChild(checkbox);
  task.appendChild(para);
  task.appendChild(im);
  tasklist.appendChild(task);
  inp.value = "";

  im.addEventListener("click", function () {
    task.remove();
  });

  check.addEventListener("change", function () {
    if (check.checked) {
      para.style.textDecoration = "line-through";
    } else {
      para.style.textDecoration = "none";
    }
  });
}
