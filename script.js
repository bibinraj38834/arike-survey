const quizData = [
    {
        question: "Before we begin, how do you identify?",
        options: [
            { text: "Male", types: [] },
            { text: "Female", types: [] }
        ]
    },
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
        desc: "Lives for love, idealistic, emotionally driven, deeply affected by romance",
        characters: [
            { "name": "George", "movie": "Premam", "gender": "male" },
            { "name": "Vinod", "movie": "Thattathin Marayathu", "gender": "male" },
            { "name": "Pooja", "movie": "Ohm Shanthi Oshaana", "gender": "female" },
            { "name": "Nadira", "movie": "Anarkali", "gender": "female" }
        ]
    },
    "charming_flirt": {
        title: "The Charming Flirt",
        icon: "😏",
        desc: "Confident, expressive, charismatic, romantic but playful",
        characters: [
            { "name": "Sunny", "movie": "Neelakasham Pachakadal Chuvanna Bhoomi", "gender": "male" },
            { "name": "Unnikrishnan", "movie": "Vandanam", "gender": "male" },
            { "name": "Darshana", "movie": "Hridayam", "gender": "female" },
            { "name": "Parakkum Latha", "movie": "Chotta Mumbai", "gender": "female" }
        ]
    },
    "slow_burn": {
        title: "The Slow-Burn Lover",
        icon: "🕯️",
        desc: "Emotionally reserved, opens up slowly, values trust",
        characters: [
            { "name": "Mathan", "movie": "Mayaanadhi", "gender": "male" },
            { "name": "Maya", "movie": "Salt N' Pepper", "gender": "female" }
        ]
    },
    "independent_heart": {
        title: "The Independent Heart",
        icon: "🦅",
        desc: "Values personal growth, freedom, purpose alongside love",
        characters: [
            { "name": "Arjun", "movie": "Bangalore Days", "gender": "male" },
            { "name": "Sara", "movie": "Sara’s", "gender": "female" },
            { "name": "Pallavi", "movie": "Uyare", "gender": "female" }
        ]
    },
    "protective_partner": {
        title: "The Protective Partner",
        icon: "🛡️",
        desc: "Strong sense of responsibility, protective (minus toxic traits)",
        characters: [
            { "name": "Shammi (Reformed Arc)", "movie": "Kumbalangi Nights", "gender": "male" },
            { "name": "Georgekutty", "movie": "Drishyam", "gender": "male" },
            { "name": "Kalyani", "movie": "Varane Avashyamund", "gender": "female" },
            { "name": "Pournami", "movie": "Vijay Superum Pournamiyum", "gender": "female" }
        ]
    },
    "passionate_lover": {
        title: "The Passionate Lover",
        icon: "🔥",
        desc: "Intense emotions, expressive love, impulsive decisions",
        characters: [
            { "name": "Luca", "movie": "Luca", "gender": "male" },
            { "name": "Aparna", "movie": "Mayaanadhi", "gender": "female" },
            { "name": "Kanchana", "movie": "Ennum Ente Moideen", "gender": "female" }
        ]
    },
    "best_friend_lover": {
        title: "The Best-Friend Lover",
        icon: "🤝",
        desc: "Friendship-first romance, comfort and companionship",
        characters: [
            { "name": "Aby", "movie": "Niram", "gender": "male" },
            { "name": "Sidharthan", "movie": "Oru Indian Pranayakatha", "gender": "male" },
            { "name": "Gayathri", "movie": "Vikramadithyan", "gender": "female" },
            { "name": "Jennifer", "movie": "Gramaphone", "gender": "female" }
        ]
    },
    "realist_romantic": {
        title: "The Realist Romantic",
        icon: "🧠",
        desc: "Grounded, practical, emotionally mature",
        characters: [
            { "name": "Dennis", "movie": "Summer in Bethlehem", "gender": "male" },
            { "name": "Das", "movie": "Sandesham", "gender": "male" },
            { "name": "Anjali", "movie": "Kali", "gender": "female" }
        ]
    },
    "mysterious_soul": {
        title: "The Mysterious Soul",
        icon: "🌚",
        desc: "Emotionally complex, guarded, layered personality",
        characters: [
            { "name": "Charlie", "movie": "Charlie", "gender": "male" },
            { "name": "Nagavalli", "movie": "Manichitrathaazhu", "gender": "female" },
            { "name": "Abhirami", "movie": "Summer in Bethlehem", "gender": "female" }
        ]
    },
    "adventurous_lover": {
        title: "The Adventurous Lover",
        icon: "🌍",
        desc: "Free-spirited, spontaneous, romantic through experiences",
        characters: [
            { "name": "Ashokan", "movie": "Yodha", "gender": "male" },
            { "name": "Tessa", "movie": "Charlie", "gender": "female" }
        ]
    }
};

let currentQuestionIndex = 0;
let userGender = null;
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
        btn.addEventListener("click", () => handleAnswer(option));
        optionsGrid.appendChild(btn);
    });

    updateProgress();
}

function handleAnswer(option) {
    // Capture gender if it's the first question
    if (currentQuestionIndex === 0) {
        userGender = option.text.toLowerCase();
    }

    // Increment score for each mapped archetype
    option.types.forEach(type => {
        if (scores.hasOwnProperty(type)) {
            scores[type]++;
        }
    });

    currentQuestionIndex++;

    // Add a small delay for better UX and to clear hover states
    setTimeout(() => {
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 300);
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

    // Filter characters by gender
    let filteredCharacters = result.characters.filter(c => c.gender === userGender);

    // Fallback if no specific gender match
    if (filteredCharacters.length === 0) {
        filteredCharacters = result.characters;
    }

    // Pick a random character
    const character = filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)];

    resultTitle.textContent = `${character.name} (${character.movie})`;
    resultIcon.textContent = result.icon;
    resultDescription.textContent = `${result.title}\n\n${result.desc}`;

    resultModal.classList.remove("hidden");
    progressFill.style.width = "100%";
}

function restartQuiz() {
    window.location.reload();
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
