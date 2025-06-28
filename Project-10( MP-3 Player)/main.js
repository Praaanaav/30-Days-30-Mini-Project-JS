const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const forwardBtn = document.getElementById("forward");
const backwardBtn = document.getElementById("backward");
const progress = document.getElementById("progress");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.classList.remove("fa-pause");
    playBtn.classList.add("fa-play");
  } else {
    audio.play();
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
  }
  isPlaying = !isPlaying;
});

audio.addEventListener("timeupdate", () => {
  const value = (audio.currentTime / audio.duration) * 100;
  progress.value = value || 0;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value * audio.duration) / 100;
});

backwardBtn.addEventListener("click", () => {
  audio.currentTime = 0;
});

forwardBtn.addEventListener("click", () => {
  audio.currentTime = audio.duration;
});
