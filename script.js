const beginBtn = document.getElementById("beginBtn");
const yesBtn = document.getElementById("yesBtn");
const question = document.getElementById("question");
const popup = document.getElementById("memoryPopup");
const photo = document.getElementById("photoReveal");
const rose = document.getElementById("rose");
const song = document.getElementById("song");

/* Begin experience */
beginBtn.onclick = () => {
song.play();
question.classList.remove("hidden");

setTimeout(() => {
popup.classList.remove("hidden");
popup.classList.add("show");
}, 2000);
};

/* YES Surprise */
yesBtn.onclick = () => {
photo.classList.remove("hidden");
rose.classList.remove("hidden");

/* restart bloom animation */
rose.classList.remove("bloom");
void rose.offsetWidth;
rose.classList.add("bloom");
};

/* Falling petals animation */
const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];

for (let i = 0; i < 40; i++) {
petals.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
size: Math.random() * 6 + 4,
speed: Math.random() * 1 + 0.5
});
}

function drawPetals() {
ctx.clearRect(0,0,canvas.width,canvas.height);

petals.forEach(p => {
ctx.beginPath();
ctx.ellipse(p.x, p.y, p.size, p.size/2, Math.PI/4, 0, Math.PI*2);
ctx.fillStyle = "rgba(255,182,193,0.8)";
ctx.fill();

```
p.y += p.speed;
if (p.y > canvas.height) p.y = -10;
```

});

requestAnimationFrame(drawPetals);
}

drawPetals();


