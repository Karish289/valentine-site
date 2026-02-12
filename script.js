document.addEventListener("DOMContentLoaded", () => {
const beginBtn = document.getElementById("beginBtn");
const messageBox = document.getElementById("messageBox");
const yesBtn = document.getElementById("yesBtn");
const final = document.getElementById("final");
const song = document.getElementById("song");

// When "Click to begin" is pressed
beginBtn.addEventListener("click", () => {
messageBox.classList.remove("hidden"); // show message
beginBtn.style.display = "none";       // hide intro button

```
song.play().catch(() => {
  console.log("Autoplay blocked until user interacts.");
});
```

});

// When "Yes" is pressed
yesBtn.addEventListener("click", () => {
final.classList.remove("hidden"); // show final photo
messageBox.style.display = "none";
});
});
