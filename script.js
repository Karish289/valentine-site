const beginBtn = document.getElementById("beginBtn");
const messageBox = document.getElementById("messageBox");
const yesBtn = document.getElementById("yesBtn");
const final = document.getElementById("final");
const rose = document.getElementById("rose");
const audio = document.getElementById("song");

// 14 words
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

beginBtn.addEventListener("click", () => {

    // Start music with fade-in
    audio.volume = 0;
    audio.play();

    let fade = setInterval(() => {
        if (audio.volume < 1) {
            audio.volume += 0.05;
        } else {
            clearInterval(fade);
        }
    }, 200);

    // Show message
    messageBox.classList.remove("hidden");

    // Start floating words
    launchWords();

    // Show rose
    setTimeout(() => {
        rose.classList.remove("hidden");
        bloomRose();
    }, 2000);
});

yesBtn.addEventListener("click", () => {
    final.classList.remove("hidden");
});

function launchWords() {
    words.forEach((word, i) => {
        setTimeout(() => {
            createFloatingWord(word);
        }, i * 800);
    });

    // Final message
    setTimeout(() => {
        createFinalMessage();
    }, words.length * 900 + 1000);
}

function createFloatingWord(text) {
    const el = document.createElement("div");
    el.className = "floating-word";
    el.innerText = text;

    el.style.left = Math.random() * window.innerWidth + "px";
    el.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(el);

    setTimeout(() => {
        el.remove();
    }, 6000);
}

function createFinalMessage() {
    const msg = document.createElement("div");
    msg.className = "final-message";
    msg.innerText = "I love you";

    document.body.appendChild(msg);
}

function bloomRose() {
    const petals = document.querySelectorAll(".petal");

    petals.forEach((petal, i) => {
        setTimeout(() => {
            petal.classList.add("open");
        }, i * 500);
    });
}
