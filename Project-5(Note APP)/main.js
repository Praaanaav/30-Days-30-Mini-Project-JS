let create = document.querySelector(".create");

create.addEventListener("click", function () {
  let container = document.querySelector(".container");

  let Notes = document.createElement("div");
  Notes.classList.add("Notes");
  container.appendChild(Notes);

  let notetext = document.createElement("textarea");
  notetext.classList.add("notetext");
  notetext.placeholder = "Write your note here...";
  Notes.appendChild(notetext);

  let del = document.createElement("div");
  del.classList.add("del");
  Notes.appendChild(del);
  let delimg = document.createElement("img");
  delimg.src = "./img/delete.png";
  delimg.classList.add("delimg");
  del.appendChild(delimg);

  delimg.addEventListener("click", function () {
    Notes.remove();
  });
});
