const beginBtn = document.getElementById("beginBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.getElementById("valentineText");
const photo = document.getElementById("photo");
const song = document.getElementById("song");

beginBtn.onclick = () => {
    beginBtn.style.display = "none";
    text.classList.remove("hidden");

    setTimeout(() => {
        yesBtn.classList.remove("hidden");
    }, 1500);

    song.play();
};

yesBtn.onclick = () => {
    photo.classList.remove("hidden");
};

/* Falling Petals */
const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];

for (let i = 0; i < 40; i++) {
    petals.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 40
    });
}

function drawPetals() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,182,193,0.8)";
    ctx.beginPath();

    for (let i = 0; i < petals.length; i++) {
        let p = petals[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }

    ctx.fill();
    updatePetals();
}

function updatePetals() {
    for (let i = 0; i < petals.length; i++) {
        let p = petals[i];
        p.y += 1 + Math.random();
        p.x += Math.sin(p.y * 0.01);

        if (p.y > canvas.height) {
            p.y = -10;
            p.x = Math.random() * canvas.width;
        }
    }
}

setInterval(drawPetals, 33);
/* 🌹 Rose + 14 Word Surprise */
const rose = document.getElementById("rose");
const wordContainer = document.getElementById("wordContainer");

/* Your 14-word message */
const words = [
    "You",
    "are",
    "the",
    "best",
    "thing",
    "that",
    "ever",
    "happened",
    "to",
    "me",
    "and",
    "I",
    "love",
    "you"
];

yesBtn.onclick = () => {
    photo.classList.remove("hidden");

    /* Show blooming rose */
    rose.classList.remove("hidden");

    setTimeout(() => {
        rose.classList.add("bloom");
    }, 100);

    /* Launch word popups */
    launchWords();
};

function launchWords() {
    words.forEach((word, index) => {
        setTimeout(() => {
            createWord(word);
        }, index * 400);
    });
}

function createWord(text) {
    const el = document.createElement("div");
    el.className = "word";
    el.innerText = text;

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.top = (window.innerHeight - 100) + "px";

    wordContainer.appendChild(el);

    setTimeout(() => el.remove(), 3000);
}
