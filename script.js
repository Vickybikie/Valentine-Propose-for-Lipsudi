let noClicks = 0;
let heartInterval = null;
let balloonInterval = null;

const yesBtn = document.getElementById("yes-button");
const noBtn = document.getElementById("no-button");
const question = document.getElementById("question");
const options = document.getElementById("options");
const imageContainer = document.getElementById("image-container");
const heartsContainer = document.getElementById("hearts-container");

// Cute convincing texts
const noTexts = [
    "You sure? 😅",
    "Think again 🥺",
    "Pretty please 💕",
    "Don’t break my heart 💔",
    "Say yes already 😘"
];

// NO button logic
noBtn.addEventListener("click", () => {
    noClicks++;

    if (noClicks <= noTexts.length) {
        noBtn.innerText = noTexts[noClicks - 1];
    }

    // Show puppy only on first NO
    if (noClicks === 1) {
        imageContainer.innerHTML = "";
        const puppy = new Image();
        puppy.src = "puppy.gif";
        puppy.alt = "Cute Puppy";
        puppy.onload = () => imageContainer.appendChild(puppy);

        startFloatingHearts();
    }

    // Grow YES button
    let currentSize = parseFloat(
        window.getComputedStyle(yesBtn).fontSize
    );
    yesBtn.style.fontSize = currentSize + 8 + "px";
});

// YES button logic
yesBtn.addEventListener("click", () => {
    question.style.display = "none";
    options.style.display = "none";

    imageContainer.innerHTML = "";
    const heartsImg = new Image();
    heartsImg.src = "hearts.gif";
    heartsImg.alt = "Hearts";
    heartsImg.onload = () => imageContainer.appendChild(heartsImg);

    document.body.classList.add("celebrate");

    // Stop small hearts
    clearInterval(heartInterval);
    heartsContainer.innerHTML = "";

    // Start heart balloons 🎈
    startHeartBalloons();
});

// Small floating hearts (NO clicks)
function startFloatingHearts() {
    heartInterval = setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }, 600);
}

// Heart balloons (YES click)
function startHeartBalloons() {
    balloonInterval = setInterval(() => {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.animationDuration = 6 + Math.random() * 4 + "s";
        heartsContainer.appendChild(balloon);

        setTimeout(() => balloon.remove(), 10000);
    }, 700);
}
