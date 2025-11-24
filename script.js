const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeSlider = document.querySelector("input[name='volume']");
const speedSlider = document.querySelector("input[name='playbackSpeed']");
const speedBar = document.querySelector('.speed-bar');
const rewindBtn = document.querySelector('.rewind');
const forwardBtn = document.querySelector('.forward');

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚❚';
}

volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

speedSlider.addEventListener("input", () => {
  video.playbackRate = speedSlider.value;
  speedBar.textContent = speedSlider.value + "×";
});

rewindBtn.addEventListener("click", () => {
  video.currentTime -= 10;
});

forwardBtn.addEventListener("click", () => {
  video.currentTime += 25;
});

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + "%";
}

video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
});

toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
