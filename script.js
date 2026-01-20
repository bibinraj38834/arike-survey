const quizData = [
    {
        question: "How do you usually fall in love?",
        options: [
            { text: "Instantly, like a movie scene", types: ["hopeless_romantic", "passionate_lover"] },
            { text: "Slowly, over time", types: ["slow_burn", "realist_romantic"] },
            { text: "Through friendship", types: ["best_friend_lover"] },
            { text: "I don’t fall easily", types: ["independent_heart", "mysterious_soul"] }
        ]
    },
    {
        question: "Your ideal date looks like?",
        options: [
            { text: "Candlelight dinner and deep talks", types: ["hopeless_romantic"] },
            { text: "Road trip with no plan", types: ["adventurous_lover"] },
            { text: "Casual coffee and laughs", types: ["best_friend_lover"] },
            { text: "Something intense and unforgettable", types: ["passionate_lover", "charming_flirt"] }
        ]
    },
    {
        question: "What scares you most in relationships?",
        options: [
            { text: "Not being loved enough", types: ["hopeless_romantic"] },
            { text: "Losing freedom", types: ["independent_heart"] },
            { text: "Getting hurt", types: ["slow_burn", "protective_partner"] },
            { text: "Boredom", types: ["adventurous_lover", "charming_flirt"] }
        ]
    },
    {
        question: "How do you express love?",
        options: [
            { text: "Words and gestures", types: ["hopeless_romantic"] },
            { text: "Actions, not words", types: ["realist_romantic"] },
            { text: "Being there always", types: ["protective_partner"] },
            { text: "Physical affection", types: ["passionate_lover"] }
        ]
    },
    {
        question: "After a breakup, you…",
        options: [
            { text: "Replay memories", types: ["hopeless_romantic", "mysterious_soul"] },
            { text: "Move on quickly", types: ["charming_flirt"] },
            { text: "Reflect and heal", types: ["slow_burn", "realist_romantic"] },
            { text: "Distract yourself", types: ["adventurous_lover"] }
        ]
    },
    {
        question: "Your love language?",
        options: [
            { text: "Quality time", types: ["best_friend_lover"] },
            { text: "Physical touch", types: ["passionate_lover"] },
            { text: "Acts of service", types: ["protective_partner"] },
            { text: "Words of affirmation", types: ["hopeless_romantic"] }
        ]
    },
    {
        question: "In a relationship, you value…",
        options: [
            { text: "Emotional depth", types: ["mysterious_soul"] },
            { text: "Stability", types: ["realist_romantic", "protective_partner"] },
            { text: "Fun & excitement", types: ["adventurous_lover"] },
            { text: "Independence", types: ["independent_heart"] }
        ]
    },
    {
        question: "Your friends describe you as…",
        options: [
            { text: "Dreamy", types: ["hopeless_romantic"] },
            { text: "Reliable", types: ["protective_partner"] },
            { text: "Magnetic", types: ["charming_flirt"] },
            { text: "Hard to read", types: ["mysterious_soul"] }
        ]
    },
    {
        question: "What makes you fall for someone?",
        options: [
            { text: "Emotional connection", types: ["slow_burn"] },
            { text: "Shared experiences", types: ["best_friend_lover"] },
            { text: "Chemistry", types: ["passionate_lover", "charming_flirt"] },
            { text: "Trust", types: ["realist_romantic", "protective_partner"] }
        ]
    },
    {
        question: "Love, to you, is…",
        options: [
            { text: "Destiny", types: ["hopeless_romantic"] },
            { text: "A journey", types: ["slow_burn"] },
            { text: "A choice", types: ["realist_romantic"] },
            { text: "An adventure", types: ["adventurous_lover"] }
        ]
    }
];

const archetypes = {
    "hopeless_romantic": {
        title: "The Hopeless Romantic",
        icon: "💘",
        desc: "Deeply emotional, you believe in soulmates and fairytale endings."
    },
    "charming_flirt": {
        title: "The Charming Flirt",
        icon: "😏",
        desc: "Confident, playful, and loves the thrill of the chase."
    },
    "slow_burn": {
        title: "The Slow-Burn Lover",
        icon: "�️",
        desc: "You take time to open up and value emotional safety above all."
    },
    "independent_heart": {
        title: "The Independent Heart",
        icon: "🦅",
        desc: "You love freedom and prioritize self-growth alongside relationships."
    },
    "protective_partner": {
        title: "The Protective Partner",
        icon: "🛡️",
        desc: "Loyal, dependable, and emotionally strong for those you love."
    },
    "passionate_lover": {
        title: "The Passionate Lover",
        icon: "🔥",
        desc: "You experience intense emotions and crave dramatic romance."
    },
    "best_friend_lover": {
        title: "The Best-Friend Lover",
        icon: "🤝",
        desc: "For you, friendship comes first, and deep love grows naturally."
    },
    "realist_romantic": {
        title: "The Realist Romantic",
        icon: "🧠",
        desc: "Practical and grounded, but you still believe in lasting love."
    },
    "mysterious_soul": {
        title: "The Mysterious Soul",
        icon: "🌚",
        desc: "Emotionally deep and enigmatic, you are hard to read but worth knowing."
    },
    "adventurous_lover": {
        title: "The Adventurous Lover",
        icon: "🌍",
        desc: "You crave excitement, spontaneity, and shared new experiences."
    }
};

let currentQuestionIndex = 0;
// Initialize scores dynamically
let scores = {};
function resetScores() {
    scores = {};
    for (const key in archetypes) {
        scores[key] = 0;
    }
}
resetScores();

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
const shareBtn = document.getElementById("shareBtn");
const closeModal = document.getElementById("closeModal");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsGrid.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = option.text;
        btn.addEventListener("click", () => handleAnswer(option.types));
        optionsGrid.appendChild(btn);
    });

    updateProgress();
}

function handleAnswer(types) {
    // Increment score for each mapped archetype
    types.forEach(type => {
        if (scores.hasOwnProperty(type)) {
            scores[type]++;
        }
    });

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
    let resultType = "hopeless_romantic"; // Default fallback

    // Get all types with the max score to handle ties randomly or deterministically
    let candidates = [];

    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            candidates = [type];
        } else if (score === maxScore) {
            candidates.push(type);
        }
    }

    // If there's a tie, you could pick random, or just the first one. 
    // Let's pick random for fun if there's a tie
    if (candidates.length > 0) {
        resultType = candidates[Math.floor(Math.random() * candidates.length)];
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
    resetScores();
    resultModal.classList.add("hidden");
    loadQuestion();
}

// Event Listeners
restartBtn.addEventListener("click", restartQuiz);
closeModal.addEventListener("click", () => {
    resultModal.classList.add("hidden");
});

shareBtn.addEventListener("click", async () => {
    const title = resultTitle.textContent;
    const description = resultDescription.textContent;
    const shareText = `I got "${title}"! 💘\n${description}\n\nFind your romantic archetype here:`;
    const url = window.location.href;

    if (navigator.share) {
        try {
            await navigator.share({
                title: "My Romantic Archetype",
                text: shareText,
                url: url
            });
        } catch (err) {
            console.log("Error sharing:", err);
        }
    } else {
        // Fallback
        navigator.clipboard.writeText(`${shareText} ${url}`);
        const originalText = shareBtn.textContent;
        shareBtn.textContent = "Copied! ✅";
        setTimeout(() => {
            shareBtn.textContent = originalText;
        }, 2000);

        // Optional: Open Twitter intent
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank');
    }
});

// Initialize
loadQuestion();
