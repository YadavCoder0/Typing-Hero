const words = [
   
        "apple", "grape", "house", "mango", "pearl",
        "lemon", "zebra", "lucky", "brave", "sugar",
        "water", "money", "chair", "plant", "truck",
        "piano", "purse", "light", "tiger", "snake",
        "cloud", "firey", "storm", "music", "blaze",
        "quick", "jumpy", "swift", "round", "sharp",
        "taste", "smile", "clean", "fresh", "dream",
        "bloom", "clash", "glove", "dance", "jolly",
        "focus", "heart", "style", "focus", "mount",
        "green", "grows", "thick", "march", "paint",
        "feast", "float", "pouch", "write", "count",
        "brisk", "roast", "shine", "rider", "flame",
        "vivid", "drink", "sight", "louds", "reach",
        "peace", "sweep", "gaze", "knock", "scent",
        "frets", "grows", "gleam", "guard", "sight",
        "track", "twist", "trust", "smoke", "clash",
        "whale", "brisk", "gland", "blind", "straw",
        "smoke", "grasp", "grape", "grasp", "chose",
        "glove", "stone", "blaze", "scent", "sheet",
        "proud", "punch", "speak", "slain", "laced",
        "loose", "vocal", "sharp", "shout", "stunt",
        "truck", "salty", "beach", "beads", "bounce",
        "awake", "prong", "vowel", "check", "stand",
        "split", "chime", "jewel", "rider", "kicks",
        "fight", "shine", "after", "mild", "dash",
        "scope", "flash", "thick", "clamp", "grief",
        "stone", "woody", "vowel", "rider", "louds",
        "vapor", "leaky", "motor", "plane", "drink",
        "arise", "north", "windy", "windy", "latch",
        "hatch", "pace", "march", "crowd", "table",
        "neat", "swirl", "vices", "surge", "shoes",
        "crash", "pouch", "spool", "flesh", "clay",
        "smash", "round", "pouch", "peaks", "rays",
        "light", "trick", "quick", "loose", "loud",
        "bless", "clash", "prong", "shake", "flick",
        "mood", "flick", "breeze", "talk", "claw",
        "flame", "fuse", "swell", "final", "tooth",
        "piano", "lemon", "pour", "match", "torch",
        "charm", "rider", "clean", "caste", "march",
        "stamp", "grip", "clamp", "pouch", "stone",
        "pouch", "plaza", "check", "pearl", "beach",
        "learn", "twist", "clang", "spine", "spare",
        "mask", "trick", "stand", "charm", "mood",
        "gaze", "grip", "align", "acorn", "marks",
        "rays", "lance", "bark", "spill", "dash",
        "boil", "rain", "down", "strong", "fight",
        "fame", "speak", "salty", "chime", "prong",
        "bounce", "clear", "crown", "lead", "march",
        "leak", "water", "daze", "dash", "stamp",
        "clamp", "loose", "flags", "shine", "crash",
        "race", "crisp", "shadow", "fiery", "spare",
        "black", "pouch", "mice", "pair", "clash",
        "bask", "check", "punch", "straw", "crash",
        "beads", "round", "bounce", "spiral", "small",
        "small", "march", "light", "smooth", "change",
        "spire", "flame", "clash", "flame", "sharp",
        "bright", "shine", "speaks", "focus", "quick",
        "brisk", "feast", "shine", "swipe", "clear",
        "clear", "latch", "smash", "brake", "round",
        "whale", "glass", "sharp", "blood", "march",
        "loud", "shake", "tight", "brave", "sharp",
        "eagle", "move", "tune", "leave", "trick"
    ];

let currentWord = "";
let score = 0;
let time = 60;
let timer;
let gameStarted = false;
let gamePaused = false;
let totalCharactersTyped = 0; // Track total characters typed

const wordElement = document.getElementById("word");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");
const timeElement = document.getElementById("time");
const playButton = document.getElementById("playButton");
const alertButton = document.getElementById("alertButton"); // Game Over alert button

// Show a new word
function showNewWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex];
    wordElement.textContent = currentWord;
}

// Start the timer
function startTimer() {
    timer = setInterval(() => {
        if (!gamePaused) {
            time--;
            timeElement.textContent = `Time Left: ${time}`;
            if (time <= 0) { // Ensure the timer stops at 0
                clearInterval(timer);
                // Show the alert button when the game ends
                alertButton.style.display = "inline-block"; // Make the alert button visible
                resetGame(); // Reset the game variables after game over
            }
        }
    }, 1000); // Timer interval set to 1000ms (1 second)
}

// Reset the game
function resetGame() {
    score = 0;
    time = 60;
    totalCharactersTyped = 0; // Reset total characters
    scoreElement.textContent = `Score: ${score}`;
    timeElement.textContent = `Time Left: ${time}`;

    inputElement.value = "";
    inputElement.focus();
    gameStarted = false;
    gamePaused = false;
    playButton.textContent = "Start";
}

// Check the user's input
inputElement.addEventListener("input", () => {
    if (inputElement.value.toLowerCase() === currentWord.toLowerCase() && time > 0) {
        score++;
        totalCharactersTyped += currentWord.length; // Update total characters typed
        scoreElement.textContent = `Score: ${score}`;
        inputElement.value = "";
        showNewWord();
    }
});

// Handle keyboard input for game control and typing
inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        if (!gameStarted) {
            gameStarted = true;
            gamePaused = false;
            playButton.textContent = "Pause";
            startTimer();
            showNewWord();
        } else {
            gamePaused = !gamePaused;
            playButton.textContent = gamePaused ? "Resume" : "Pause";
        }
    }
});

// Handle play button click
playButton.addEventListener("click", () => {
    if (!gameStarted) {
        gameStarted = true;
        gamePaused = false;
        playButton.textContent = "Pause";
        startTimer();
        showNewWord();
    } else {
        gamePaused = !gamePaused;
        playButton.textContent = gamePaused ? "Resume" : "Pause";
    }
});

// Show Game Over alert when alert button is clicked
alertButton.addEventListener("click", () => {
    alert(`Game Over! Your final score is: ${score}`);
    alertButton.style.display = "none"; // Hide the alert button after showing the alert
});

       
        // Mode Dark And Light
       

        let modeBtn = document.querySelector("#mode");
let currMode = "light"; // current mode is light

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "whitesmoke";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "#1b2141";
         document.querySelector("body").style.color = "white";
    }
    console.log(currMode);
});
