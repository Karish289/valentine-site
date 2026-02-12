const beginBtn = document.getElementById("beginBtn");
const yesBtn = document.getElementById("yesBtn");

const intro = document.getElementById("intro");
const messageBox = document.getElementById("messageBox");
const final = document.getElementById("final");

const song = document.getElementById("song");

beginBtn.addEventListener("click", () => {
    intro.classList.add("hidden");
    messageBox.classList.remove("hidden");
    song.play();
});

yesBtn.addEventListener("click", () => {
    messageBox.classList.add("hidden");
    final.classList.remove("hidden");
});
