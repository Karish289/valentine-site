document.addEventListener("DOMContentLoaded", function () {

const startScreen = document.getElementById("startScreen");
const beginBtn = document.getElementById("startButton");
const messageBox = document.getElementById("valentineText");
const yesBtn = document.getElementById("yesBtn");
const rose = document.getElementById("rose");
const audio = document.getElementById("song");

const words = [
"Loving","Kind","Gentle Heart","Funny","Beautiful Eyes",
"Cheeky Smile","Sexy","Cutie Pie","Calming","Handsome",
"Courageous","Simply Wonderful","Cuddly","Peaceful"
];

beginBtn.onclick = () => {

    // ✅ hide start button completely
    startScreen.classList.add("hidden");

    // ✅ show the question now
    messageBox.classList.remove("hidden");

    // music fade-in
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

    launchWords();

    setTimeout(() => {
        rose.classList.remove("hidden");
        bloomRose();
    }, 2000);
};

yesBtn.onclick = () => {
    showLoveMessage();
    showPhoto();
};

function launchWords() {
    words.forEach((word, i) => {
        setTimeout(() => createFloatingWord(word), i * 800);
    });
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

function showLoveMessage() {
    const msg = document.createElement("div");
    msg.className = "love-message";
    msg.innerText = "I love you";
    document.body.appendChild(msg);
}

function showPhoto() {
    const img = document.createElement("img");
    img.src = "photo.jpeg";
    img.className = "love-photo";
    document.body.appendChild(img);
}

function bloomRose() {
    const petals = document.querySelectorAll(".petal");
    petals.forEach((petal, i) => {
        setTimeout(() => petal.classList.add("open"), i * 500);
    });
}

});
