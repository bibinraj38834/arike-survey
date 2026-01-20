const quizData = [
    {
        question: "What is your idea of a perfect date?",
        options: [
            { text: "A candlelit dinner with poetry reading", type: "Poet" },
            { text: "An exclusive gala or VIP event", type: "Power" },
            { text: "A spontaneous road trip to nowhere", type: "Free" },
            { text: "A cozy movie night at home", type: "Protector" }
        ]
    },
    {
        question: "What is your primary Love Language?",
        options: [
            { text: "Words of Affirmation", type: "Poet" },
            { text: "Receiving Gifts", type: "Power" },
            { text: "Quality Time & Adventures", type: "Free" },
            { text: "Acts of Service", type: "Protector" }
        ]
    },
    {
        question: "How do you handle conflict?",
        options: [
            { text: "I write a long, emotional letter", type: "Poet" },
            { text: "I prefer a logical, structured debate", type: "Power" },
            { text: "I try to distract us with something fun", type: "Free" },
            { text: "I fix the practical problem immediately", type: "Protector" }
        ]
    },
    {
        question: "Pick a gift to receive:",
        options: [
            { text: "A handwritten love letter", type: "Poet" },
            { text: "A luxury designer watch", type: "Power" },
            { text: "Plane tickets for a weekend getaway", type: "Free" },
            { text: "A high-quality coffee maker", type: "Protector" }
        ]
    },
    {
        question: "What's your ideal weekend activity?",
        options: [
            { text: "Visiting an art gallery", type: "Poet" },
            { text: "Networking at a high-end club", type: "Power" },
            { text: "Skydiving or hiking a new trail", type: "Free" },
            { text: "Gardening or a DIY project", type: "Protector" }
        ]
    },
    {
        question: "Which quality attracts you most?",
        options: [
            { text: "Emotional sensitivity and depth", type: "Poet" },
            { text: "Ambition and drive for success", type: "Power" },
            { text: "Spontaneity and zest for life", type: "Free" },
            { text: "Reliability and stability", type: "Protector" }
        ]
    },
    {
        question: "Choose a dream vacation spot:",
        options: [
            { text: "Paris, France - for the romance", type: "Poet" },
            { text: "Dubai, UAE - for the luxury", type: "Power" },
            { text: "Backpacking through Southeast Asia", type: "Free" },
            { text: "A secluded cabin in the woods", type: "Protector" }
        ]
    },
    {
        question: "How do you prefer to communicate?",
        options: [
            { text: "Long, expressive text messages", type: "Poet" },
            { text: "Short, efficient, to the point", type: "Power" },
            { text: "Face-to-face, reading the vibe", type: "Free" },
            { text: "Routine daily check-ins", type: "Protector" }
        ]
    },
    {
        question: "Favorite Movie Genre?",
        options: [
            { text: "Titanic / Generally Dramatic Romance", type: "Poet" },
            { text: "Wolf of Wall Street / Thriller", type: "Power" },
            { text: "Indiana Jones / Action Adventure", type: "Free" },
            { text: "Toy Story / Family Comedy", type: "Protector" }
        ]
    },
    {
        question: "What is your ultimate relationship goal?",
        options: [
            { text: "A soul-deep spiritual connection", type: "Poet" },
            { text: "Being a power couple that dominates", type: "Power" },
            { text: "Partners in crime, exploring the world", type: "Free" },
            { text: "Building a safe, happy family home", type: "Protector" }
        ]
    }
];

const archetypes = {
    "Poet": {
        title: "The Romantic Poet",
        icon: "🌹",
        desc: "You are a dreamer who believes in fairy tales. You feel deeply and love passionately. Your ideal partner is someone who can match your emotional depth and isn't afraid of vulnerability."
    },
    "Power": {
        title: "The Ambitious Power Player",
        icon: "👑",
        desc: "You are driven, confident, and know what you want. You value success and excellence. Your ideal partner is someone who is equally ambitious and can stand by your side as you conquer the world."
    },
    "Free": {
        title: "The Adventurous Free Spirit",
        icon: "✈️",
        desc: "You are wild at heart and refuse to be tied down by convention. You value experiences over possessions. Your ideal partner is someone who is ready to pack a bag and go on an adventure at a moment's notice."
    },
    "Protector": {
        title: "The Steadfast Protector",
        icon: "🛡️",
        desc: "You are the rock in the storm. You value loyalty, stability, and practical acts of love. Your ideal partner is someone who appreciates your dedication and wants to build a secure, lasting future with you."
    }
};

let currentQuestionIndex = 0;
let scores = {
    "Poet": 0,
    "Power": 0,
    "Free": 0,
    "Protector": 0
};

// DOM Elements
const questionText = document.getElementById("questionText");
const optionsGrid = document.getElementById("optionsGrid");
const progressFill = document.getElementById("progressFill");
const questionCounter = document.getElementById("questionCounter");
const resultModal = document.getElementById("resultModal");
const resultTitle = document.getElementById("resultTitle");
const resultIcon = document.getElementById("resultIcon");
const resultDescription = document.getElementById("resultDescription");
const restartBtn = document.getElementById("restartBtn");
const closeModal = document.getElementById("closeModal");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsGrid.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = option.text;
        btn.addEventListener("click", () => handleAnswer(option.type));
        optionsGrid.appendChild(btn);
    });

    updateProgress();
}

function handleAnswer(type) {
    scores[type]++;
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
}

function showResult() {
    // Find highest score
    let maxScore = 0;
    let resultType = "Poet"; // Default

    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultType = type;
        }
    }

    const result = archetypes[resultType];
    resultTitle.textContent = result.title;
    resultIcon.textContent = result.icon;
    resultDescription.textContent = result.desc;

    resultModal.classList.remove("hidden");
    progressFill.style.width = "100%";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    scores = { "Poet": 0, "Power": 0, "Free": 0, "Protector": 0 };
    resultModal.classList.add("hidden");
    loadQuestion();
}

// Event Listeners
restartBtn.addEventListener("click", restartQuiz);
closeModal.addEventListener("click", () => {
    // Ideally we might want to just restart or close. For now, let's just close the modal visually but maybe restart if they want to play again
    // But since the quiz is done, closing it leaves them at a blank end state. Let's make "X" also restart or just stay on the last view.
    // Let's just hide it, but maybe we should disable X if we want them to explicitly restart. 
    // Actually, let's make X just hide it, users can click a "Restart" button which is inside the modal.
    resultModal.classList.add("hidden");
});

// Initialize
loadQuestion();
