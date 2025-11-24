const video = document.querySelector('video');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeSlider = document.querySelector("input[name='volume']");
const speedSlider = document.querySelector("input[name='playbackSpeed']");
const speedBar = document.querySelector('.speed-bar');
const skipButtons = document.querySelectorAll('[data-skip]');

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

volumeSlider.addEventListener("input", () => {
  video.volume = volumeSlider.value;
});

speedSlider.addEventListener("input", () => {
  video.playbackRate = speedSlider.value;
  speedBar.textContent = speedSlider.value + "×";
});

skipButtons.forEach(btn =>
  btn.addEventListener("click", function () {
    video.currentTime += parseFloat(this.dataset.skip);
  })
);

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = percent + "%";
}

video.addEventListener("timeupdate", handleProgress);

progress.addEventListener("click", function (e) {
  const clickPos = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = clickPos;
});

video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
