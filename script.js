const beginBtn = document.getElementById("beginBtn");
const messageBox = document.getElementById("messageBox");
const yesBtn = document.getElementById("yesBtn");
const final = document.getElementById("final");
const rose = document.getElementById("rose");
const audio = document.getElementById("song");

// Words to float
const words = [
"Loving",
"Kind",
"Gentle Heart",
"Funny",
"Beautiful Eyes",
"Cheeky Smile",
"Sexy",
"Cutie Pie",
"Calming",
"Handsome",
"Courageous",
"Simply Wonderful",
"Cuddly",
"Peaceful"
];

beginBtn.onclick = () => {

    // Safe music fade-in
    audio.volume = 0;
    audio.play();

    let vol = 0;
    const fade = setInterval(() => {
        vol += 0.03;
        if (vol >= 1) {
            vol = 1;
            clearInterval(fade);
        }
        audio.volume = vol;
    }, 200);

    messageBox.classList.remove("hidden");

    launchWords();

    setTimeout(() => {
        rose.classList.remove("hidden");
        bloomRose();
    }, 2000);
};

yesBtn.onclick = () => {
    final.classList.remove("hidden");
};

// Floating words
function launchWords() {
    words.forEach((word, i) => {
        setTimeout(() => createFloatingWord(word), i * 800);
    });

    setTimeout(showLoveMessage, words.length * 900 + 1000);
}

function createFloatingWord(text) {
    const el = document.createElement("div");
    el.className = "floating-word";
    el.innerText = text;

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 6000);
}

// BIG CENTER MESSAGE
function showLoveMessage() {
    const msg = document.createElement("div");
    msg.className = "love-message";
    msg.innerText = "I love you";

    document.body.appendChild(msg);
}

// Rose blooming
function bloomRose() {
    const petals = document.querySelectorAl
