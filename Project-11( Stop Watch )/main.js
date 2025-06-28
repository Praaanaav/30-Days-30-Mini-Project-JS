const play = document.querySelector(".play");
const pause = document.querySelector(".fa-stop");
const reset = document.querySelector(".fa-rotate-left");

let timer = null;
let hr = 0;
let min = 0;
let sec = 0;

function stopwatch() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
    if (min === 60) {
      min = 0;
      hr++;
    }
  }

  document.querySelector(".hr").innerHTML = hr.toString().padStart(2, "0");
  document.querySelector(".min").innerHTML = min.toString().padStart(2, "0");
  document.querySelector(".sec").innerHTML = sec.toString().padStart(2, "0");
}

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);

  play.innerHTML = `<i class="fa-solid fa-pause"></i>`;
}

function watchStop() {
  clearInterval(timer);
  play.innerHTML = `<i class="fa-solid fa-play"></i>`;
}

function watchReset() {
  clearInterval(timer);
  hr = 0;
  min = 0;
  sec = 0;

  document.querySelector(".hr").innerHTML = "00";
  document.querySelector(".min").innerHTML = "00";
  document.querySelector(".sec").innerHTML = "00";

  play.innerHTML = `<i class="fa-solid fa-play"></i>`;
}

play.addEventListener("click", () => {
  const icon = play.querySelector("i");
  if (icon.classList.contains("fa-play")) {
    watchStart();
  } else {
    watchStop();
  }
});

pause.addEventListener("click", watchStop);
reset.addEventListener("click", watchReset);
