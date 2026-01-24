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
            { text: "I don’t fall easily", types: ["independent_heart", "mysterious_soul"] },
            { text: "Accidentally, when I least expect it", types: ["adventurous_lover", "hopeless_romantic"] },
            { text: "After analyzing compatibility", types: ["realist_romantic", "protective_partner"] }
        ]
    },
    {
        question: "Your ideal date looks like?",
        options: [
            { text: "Candlelight dinner and deep talks", types: ["hopeless_romantic"] },
            { text: "Road trip with no plan", types: ["adventurous_lover"] },
            { text: "Casual coffee and laughs", types: ["best_friend_lover"] },
            { text: "Something intense and unforgettable", types: ["passionate_lover", "charming_flirt"] },
            { text: "Quiet night at home", types: ["slow_burn", "protective_partner"] },
            { text: "Trying a new activity together", types: ["independent_heart", "adventurous_lover"] }
        ]
    },
    {
        question: "What scares you most in relationships?",
        options: [
            { text: "Not being loved enough", types: ["hopeless_romantic"] },
            { text: "Losing freedom", types: ["independent_heart"] },
            { text: "Getting hurt", types: ["slow_burn", "protective_partner"] },
            { text: "Boredom", types: ["adventurous_lover", "charming_flirt"] },
            { text: "Being misunderstood", types: ["mysterious_soul", "best_friend_lover"] },
            { text: "Financial instability", types: ["realist_romantic"] }
        ]
    },
    {
        question: "How do you express love?",
        options: [
            { text: "Words and gestures", types: ["hopeless_romantic"] },
            { text: "Actions, not words", types: ["realist_romantic"] },
            { text: "Being there always", types: ["protective_partner"] },
            { text: "Physical affection", types: ["passionate_lover"] },
            { text: "Giving thoughtful gifts", types: ["charming_flirt", "slow_burn"] },
            { text: "Through humor and teasing", types: ["best_friend_lover", "adventurous_lover"] }
        ]
    },
    {
        question: "After a breakup, you…",
        options: [
            { text: "Replay memories", types: ["hopeless_romantic", "mysterious_soul"] },
            { text: "Move on quickly", types: ["charming_flirt"] },
            { text: "Reflect and heal", types: ["slow_burn", "realist_romantic"] },
            { text: "Distract yourself", types: ["adventurous_lover"] },
            { text: "Focus on career/hobbies", types: ["independent_heart", "protective_partner"] },
            { text: "Rely on friends", types: ["best_friend_lover"] }
        ]
    },
    {
        question: "Your love language?",
        options: [
            { text: "Quality time", types: ["best_friend_lover"] },
            { text: "Physical touch", types: ["passionate_lover"] },
            { text: "Acts of service", types: ["protective_partner"] },
            { text: "Words of affirmation", types: ["hopeless_romantic"] },
            { text: "Receiving gifts", types: ["charming_flirt"] },
            { text: "Shared intellectual pursuits", types: ["independent_heart", "realist_romantic"] }
        ]
    },
    {
        question: "In a relationship, you value…",
        options: [
            { text: "Emotional depth", types: ["mysterious_soul"] },
            { text: "Stability", types: ["realist_romantic", "protective_partner"] },
            { text: "Fun & excitement", types: ["adventurous_lover"] },
            { text: "Independence", types: ["independent_heart"] },
            { text: "Constant communication", types: ["hopeless_romantic", "best_friend_lover"] },
            { text: "Passion and chemistry", types: ["passionate_lover", "charming_flirt"] }
        ]
    },
    {
        question: "Your friends describe you as…",
        options: [
            { text: "Dreamy", types: ["hopeless_romantic"] },
            { text: "Reliable", types: ["protective_partner"] },
            { text: "Magnetic", types: ["charming_flirt"] },
            { text: "Hard to read", types: ["mysterious_soul"] },
            { text: "Ambitious", types: ["independent_heart", "realist_romantic"] },
            { text: "The life of the party", types: ["adventurous_lover", "best_friend_lover"] }
        ]
    },
    {
        question: "What makes you fall for someone?",
        options: [
            { text: "Emotional connection", types: ["slow_burn"] },
            { text: "Shared experiences", types: ["best_friend_lover"] },
            { text: "Chemistry", types: ["passionate_lover", "charming_flirt"] },
            { text: "Trust", types: ["realist_romantic", "protective_partner"] },
            { text: "Intellectual stimulation", types: ["independent_heart", "mysterious_soul"] },
            { text: "Grand romantic gestures", types: ["hopeless_romantic", "adventurous_lover"] }
        ]
    },
    {
        question: "Love, to you, is…",
        options: [
            { text: "Destiny", types: ["hopeless_romantic"] },
            { text: "A journey", types: ["slow_burn"] },
            { text: "A choice", types: ["realist_romantic"] },
            { text: "An adventure", types: ["adventurous_lover"] },
            { text: "A partnership", types: ["protective_partner", "independent_heart"] },
            { text: "An intense feeling", types: ["passionate_lover", "mysterious_soul"] }
        ]
    }
];

const archetypes = {
    "hopeless_romantic": {
        title: "The Hopeless Romantic",
        icon: "💘",
        desc: "Lives for love, idealistic, emotionally driven, deeply affected by romance",
        hook: "You are the kind of person who believes love should feel like magic.",
        mirror: "You tend to value deep connection over logic, feel emotions intensely, and hold onto memories long after they've faded.",
        truth: "Sometimes, you fall in love with the potential of a person, rather than who they actually are.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "George", "movie": "Premam", "gender": "male", "imageSrc": "assets/george-premam.png" },
            { "name": "Vinod", "movie": "Thattathin Marayathu", "gender": "male", "imageSrc": "assets/vinod-thattathin-marayathu.png" },
            { "name": "Pooja", "movie": "Ohm Shanthi Oshaana", "gender": "female", "imageSrc": "assets/pooja-ohm-shanthi-oshaana.png" },
            { "name": "Nadira", "movie": "Anarkali", "gender": "female", "imageSrc": "assets/nadira-anarkali.png" },
            { "name": "Moideen", "movie": "Ennu Ninte Moideen", "gender": "male", "imageSrc": "assets/moideen-ennu-ninte-moideen.png" },
            { "name": "Balamani", "movie": "Nandanam", "gender": "female", "imageSrc": "assets/balamani-nandanam.png" },
            { "name": "Rasool", "movie": "Annayum Rasoolum", "gender": "male", "imageSrc": "assets/rasool-annayum-rasoolum.png" },
            { "name": "Mini", "movie": "Aniyathipravu", "gender": "female", "imageSrc": "assets/mini-aniyathipravu.png" },
            { "name": "Sachin", "movie": "Premalu", "gender": "male", "imageSrc": "assets/sachin-premalu.png" }
        ]
    },
    "charming_flirt": {
        title: "The Charming Flirt",
        icon: "😏",
        desc: "Confident, expressive, charismatic, romantic but playful",
        hook: "You are the kind of person who knows how to light up a room.",
        mirror: "You tend to use humor to connect, make people feel special instantly, and enjoy the thrill of the chase.",
        truth: "Sometimes, you keep things light because you're afraid that 'real' intimacy might be boring—or terrifying.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "Sunny", "movie": "Neelakasham Pachakadal Chuvanna Bhoomi", "gender": "male", "imageSrc": "assets/sunny-neelakasham-pachakadal-chuvanna-bhoomi.png" },
            { "name": "Unnikrishnan", "movie": "Vandanam", "gender": "male", "imageSrc": "assets/unnikrishnan-vandanam.png" },
            { "name": "Darshana", "movie": "Hridayam", "gender": "female", "imageSrc": "assets/darshana-hridayam.png" },
            { "name": "Parakkum Latha", "movie": "Chotta Mumbai", "gender": "female", "imageSrc": "assets/parakkum-latha-chotta-mumbai.png" },
            { "name": "Joji", "movie": "Kilukkam", "gender": "male", "imageSrc": "assets/joji-kilukkam.png" },
            { "name": "Faizi", "movie": "Ustad Hotel", "gender": "male", "imageSrc": "assets/faizi-ustad-hotel.png" },
            { "name": "Lucky", "movie": "Casanovva", "gender": "male", "imageSrc": "assets/lucky-casanovva.png" },
            { "name": "Amal Davis", "movie": "Premalu", "gender": "male", "imageSrc": "assets/amal-davis-premalu.png" },
            { "name": "Sona", "movie": "Super Sharanya", "gender": "female", "imageSrc": "assets/sona-super-sharanya.png" }
        ]
    },
    "slow_burn": {
        title: "The Slow-Burn Lover",
        icon: "🕯️",
        desc: "Emotionally reserved, opens up slowly, values trust",
        hook: "You are the kind of person who needs to feel safe before you feel in love.",
        mirror: "You tend to observe before you commit, value consistency over grand gestures, and protect your heart carefully.",
        truth: "Sometimes, you wait so long for the 'perfect' moment to open up that you miss the connection right in front of you.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "Mathan", "movie": "Mayaanadhi", "gender": "male", "imageSrc": "assets/mathan-mayaanadhi.png" },
            { "name": "Maya", "movie": "Salt N' Pepper", "gender": "female", "imageSrc": "assets/maya-salt-n-pepper.png" },
            { "name": "Divya", "movie": "Bangalore Days", "gender": "female", "imageSrc": "assets/divya-bangalore-days.png" },
            { "name": "Thulasi", "movie": "Classmates", "gender": "female", "imageSrc": "assets/thulasi-classmates.png" },
            { "name": "Raghu", "movie": "Anuraga Karikkin Vellam", "gender": "male", "imageSrc": "assets/raghu-anuraga-karikkin-vellam.png" },
            { "name": "Giri", "movie": "Ohm Shanthi Oshaana", "gender": "male", "imageSrc": "assets/giri-super-sharanya.png" }
        ]
    },
    "independent_heart": {
        title: "The Independent Heart",
        icon: "🦅",
        desc: "Values personal growth, freedom, purpose alongside love",
        hook: "You are the kind of person who refuses to lose yourself in someone else.",
        mirror: "You tend to prioritize your goals, need your own space to recharge, and want a partner, not a savior.",
        truth: "Sometimes, your need for independence can make your partner feel like they aren't needed at all.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "Arjun", "movie": "Bangalore Days", "gender": "male", "imageSrc": "assets/arjun-bangalore-days.png" },
            { "name": "Sara", "movie": "Sara’s", "gender": "female", "imageSrc": "assets/sara-saras.png" },
            { "name": "Pallavi", "movie": "Uyare", "gender": "female", "imageSrc": "assets/pallavi-uyare.png" },
            { "name": "Reenu", "movie": "Premalu", "gender": "female", "imageSrc": "assets/reenu-premalu.png" },
            { "name": "Ambili", "movie": "Ambili", "gender": "male", "imageSrc": "assets/ambili-super-sharanya.png" },
            { "name": "Prakashan", "movie": "Njan Prakashan", "gender": "male", "imageSrc": "assets/prakashan-njan-prakashan.png" }
        ]
    },
    "protective_partner": {
        title: "The Protective Partner",
        icon: "🛡️",
        desc: "Strong sense of responsibility, protective (minus toxic traits)",
        hook: "You are the kind of person who shows love by taking care of things.",
        mirror: "You tend to step in when things get messy, feel responsible for others' happiness, and value loyalty above all.",
        truth: "Sometimes, you protect so much that you forget to let people make their own mistakes.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "Shammi", "movie": "Kumbalangi Nights", "gender": "male", "imageSrc": "assets/shammi-kumbalangi-nights.png" },
            { "name": "Georgekutty", "movie": "Drishyam", "gender": "male", "imageSrc": "assets/georgekutty-drishyam.png" },
            { "name": "Kalyani", "movie": "Varane Avashyamund", "gender": "female", "imageSrc": "assets/kalyani-varane-avashyamund.png" },
            { "name": "Pournami", "movie": "Vijay Superum Pournamiyum", "gender": "female", "imageSrc": "assets/pournami-vijay-superum-pournamiyum.png" },
            { "name": "Shivadas", "movie": "Bangalore Days", "gender": "male", "imageSrc": "assets/shivadas-bangalore-days.png" }
        ]
    },
    "passionate_lover": {
        title: "The Passionate Lover",
        icon: "🔥",
        desc: "Intense emotions, expressive love, impulsive decisions",
        hook: "You are the kind of person who loves with your whole being, no brakes.",
        mirror: "You tend to follow your heart recklessly, feel highs and lows intensely, and crave all-consuming connection.",
        truth: "Sometimes, you burn so bright that you burn out—or burn the people around you.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "Luca", "movie": "Luca", "gender": "male", "imageSrc": "assets/luca-luca.png" },
            { "name": "Aparna", "movie": "Mayaanadhi", "gender": "female", "imageSrc": "assets/aparna-mayaanadhi.png" },
            { "name": "Kanchana", "movie": "Ennum Ente Moideen", "gender": "female", "imageSrc": "assets/kanchana-ennum-ente-moideen.png" }
        ]
    },
    "best_friend_lover": {
        title: "The Best-Friend Lover",
        icon: "🤝",
        desc: "Friendship-first romance, comfort and companionship",
        hook: "You are the kind of person who needs to laugh with someone before you love them.",
        mirror: "You tend to value shared history, feel most comfortable with a partner who is a peer, and dread awkward silences.",
        truth: "Sometimes, you stay in 'comfort zones' because the risk of losing a friend is scarier than never trying.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "Aby", "movie": "Niram", "gender": "male", "imageSrc": "assets/aby-niram.png" },
            { "name": "Sidharthan", "movie": "Oru Indian Pranayakatha", "gender": "male", "imageSrc": "assets/sidharthan-oru-indian-pranayakatha.png" },
            { "name": "Gayathri", "movie": "Vikramadithyan", "gender": "female", "imageSrc": "assets/gayathri-vikramadithyan.png" },
            { "name": "Jennifer", "movie": "Gramaphone", "gender": "female", "imageSrc": "assets/jennifer-gramaphone.png" }
        ]
    },
    "realist_romantic": {
        title: "The Realist Romantic",
        icon: "🧠",
        desc: "Grounded, practical, emotionally mature",
        hook: "You are the kind of person who believes love is a verb, not just a feeling.",
        mirror: "You tend to look for stability, show love through acts of service, and keep your feet firmly planted on the ground.",
        truth: "Sometimes, you focus so much on the practicalities that you forget to let yourself be swept away.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "Dennis", "movie": "Summer in Bethlehem", "gender": "male", "imageSrc": "assets/dennis-summer-in-bethlehem.png" },
            { "name": "Das", "movie": "Sandesham", "gender": "male", "imageSrc": "assets/das-sandesham.png" },
            { "name": "Anjali", "movie": "Kali", "gender": "female", "imageSrc": "assets/anjali-kali.png" },
            { "name": "Sarah", "movie": "Bangalore Days", "gender": "female", "imageSrc": "assets/sarah-bangalore-days.png" },
            { "name": "Biju Paulose", "movie": "Action Hero Biju", "gender": "male", "imageSrc": "assets/biju-super-sharanya.png" }
        ]
    },
    "mysterious_soul": {
        title: "The Mysterious Soul",
        icon: "🌚",
        desc: "Emotionally complex, guarded, layered personality",
        hook: "You are the kind of person who feels like an unsolved puzzle.",
        mirror: "You tend to keep your deepest thoughts hidden, attract people who want to 'figure you out', and value privacy intensely.",
        truth: "Sometimes, you build walls so high that even the people who want to love you can't climb them.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "Charlie", "movie": "Charlie", "gender": "male", "imageSrc": "assets/charlie-charlie.png" },
            { "name": "Nagavalli", "movie": "Manichitrathaazhu", "gender": "female", "imageSrc": "assets/nagavalli-manichitrathaazhu.png" },
            { "name": "Abhirami", "movie": "Summer in Bethlehem", "gender": "female", "imageSrc": "assets/abhirami-summer-in-bethlehem.png" },
            { "name": "Dr Sunny", "movie": "Manichitrathazhu", "gender": "male", "imageSrc": "assets/sunny-super-sharanya.png" },
            { "name": "Hari", "movie": "North 24 Kaatham", "gender": "male", "imageSrc": "assets/hari-super-sharanya.png" }
        ]
    },
    "adventurous_lover": {
        title: "The Adventurous Lover",
        icon: "🌍",
        desc: "Free-spirited, spontaneous, romantic through experiences",
        hook: "You are the kind of person who falls in love with experiences as much as people.",
        mirror: "You tend to seek excitement, get bored with routine, and see love as the ultimate great adventure.",
        truth: "Sometimes, you keep moving because staying still forces you to face things you can't run from.",
        intro: "That’s why your love style aligns with...",
        characters: [
            { "name": "Ashokan", "movie": "Yodha", "gender": "male", "imageSrc": "assets/chandralekha-yodha.png" },
            { "name": "Tessa", "movie": "Charlie", "gender": "female", "imageSrc": "assets/tessa-charlie.png" },
            { "name": "Kasi", "movie": "Neelakasham Pachakadal Chuvanna Bhoomi", "gender": "male", "imageSrc": "assets/kasi-super-sharanya.png" }
        ]
    }
};

let currentQuestionIndex = 0;
let userGender = null;
// Initialize scores dynamically
let scores = {};
let currentSelections = []; // Track current question selections

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
const resultIcon = document.getElementById("resultIcon");
const resultImage = document.getElementById("resultImage");
const resultDescription = document.getElementById("resultDescription");
const restartBtn = document.getElementById("restartBtn");
const topShareBtn = document.getElementById("topShareBtn");
const nextBtn = document.getElementById("nextBtn");

// New Story Elements
const analyzingLoader = document.getElementById("analyzingLoader");
const storyContainer = document.getElementById("storyContainer");
const storyText = document.getElementById("storyText");
const finalResult = document.getElementById("finalResult");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsGrid.innerHTML = "";



    currentSelections = []; // Reset selections for new question
    updateNextButtonState(); // Ensure button is hidden/disabled initially

    currentQuestion.options.forEach(option => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.textContent = option.text;
        btn.addEventListener("click", (e) => toggleOption(btn, option));
        optionsGrid.appendChild(btn);
    });

    updateProgress();

    // Hide Next button initially
    nextBtn.classList.add("hidden");
    nextBtn.disabled = true;
}

function toggleOption(btn, option) {
    // Special handling for first question (Gender) - Single Selection
    if (currentQuestionIndex === 0) {
        const isSelected = btn.classList.contains("selected");

        // Clear all previous selections
        const allButtons = optionsGrid.querySelectorAll('.option-btn');
        allButtons.forEach(b => b.classList.remove('selected'));
        currentSelections = [];

        if (!isSelected) {
            btn.classList.add("selected");
            currentSelections.push(option);
        }

        updateNextButtonState();
        return;
    }

    // Multi-selection logic for other questions
    const isSelected = btn.classList.contains("selected");

    if (isSelected) {
        // Deselect
        btn.classList.remove("selected");
        currentSelections = currentSelections.filter(sel => sel.text !== option.text);
    } else {
        // Select (Max 3)
        if (currentSelections.length >= 3) {
            // Shake animation for feedback
            btn.classList.add("shake");
            setTimeout(() => btn.classList.remove("shake"), 500);
            return;
        }
        btn.classList.add("selected");
        currentSelections.push(option);
    }

    updateNextButtonState();
}

function updateNextButtonState() {
    if (currentSelections.length > 0) {
        nextBtn.classList.remove("hidden");
        nextBtn.disabled = false;
    } else {
        nextBtn.classList.add("hidden");
        nextBtn.disabled = true;
    }
}

function nextQuestion() {
    if (currentSelections.length === 0) return;

    // Process all selected answers
    currentSelections.forEach(option => {
        // Capture gender if it's the first question (use the first selection, or logic for multiple genders?? 
        // For simplicity, if multiple genders are selected, we might just take the first one or last one. 
        // userGender logic assumes single choice usually, but let's stick to first choice for gender if multiple allowed)
        if (currentQuestionIndex === 0 && !userGender) {
            userGender = option.text.toLowerCase();
            trackEvent('quiz_start', { gender: userGender });
        }

        // Increment score
        option.types.forEach(type => {
            if (scores.hasOwnProperty(type)) {
                scores[type]++;
            }
        });
    });

    currentQuestionIndex++;

    // Smart Lazy Preload: Start downloading images after user completes the first question
    if (currentQuestionIndex === 1) {
        preloadImages();
    }

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

async function showResult() {
    // 1. Determine Archetype
    let maxScore = 0;
    let resultType = "hopeless_romantic";
    let candidates = [];

    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            candidates = [type];
        } else if (score === maxScore) {
            candidates.push(type);
        }
    }

    if (candidates.length > 0) {
        resultType = candidates[Math.floor(Math.random() * candidates.length)];
    }

    const result = archetypes[resultType];

    // Filter characters by gender
    let filteredCharacters = result.characters.filter(c => c.gender === userGender);
    if (filteredCharacters.length === 0) {
        filteredCharacters = result.characters;
    }
    const character = filteredCharacters[Math.floor(Math.random() * filteredCharacters.length)];

    // 2. Prepare Final Result Content (Hidden)
    // Show Image if available
    if (character.imageSrc) {
        resultImage.src = character.imageSrc;
        resultImage.classList.remove("hidden");
        document.getElementById("emojiContainer").classList.add("hidden");
    } else {
        resultIcon.textContent = result.icon;
        document.getElementById("emojiContainer").classList.remove("hidden");
        resultImage.classList.add("hidden");
    }

    const resultHTML = `
        <strong>${result.title}</strong>
        ${result.desc}
    `;
    resultDescription.innerHTML = resultHTML;

    // 3. Start Animation Sequence
    resultModal.classList.remove("hidden");

    // Reset Views
    analyzingLoader.classList.remove("hidden");
    storyContainer.classList.add("hidden");
    finalResult.classList.add("hidden");
    topShareBtn.classList.add("hidden"); // Hide share until end

    // Step A: Analyzing (2000ms)
    await delay(2000);
    analyzingLoader.classList.add("hidden");

    // Step B: Storytelling
    storyContainer.classList.remove("hidden");

    const storySequence = [
        result.hook,
        `${result.intro} <br><strong>${character.name}</strong> <span style="font-size: 0.9em; opacity: 0.8">(${character.movie})</span>`
    ];

    for (const text of storySequence) {
        storyText.innerHTML = text;
        storyText.classList.remove("visible");

        // Fade In
        await delay(100);
        storyText.classList.add("visible");

        // Read Time (adjust based on length, min 2s)
        await delay(3000);

        // Fade Out
        storyText.classList.remove("visible");
        await delay(500);
    }

    // Step C: Final Reveal
    storyContainer.classList.add("hidden");
    finalResult.classList.remove("hidden");
    topShareBtn.classList.remove("hidden");

    // Track Quiz Completion
    trackEvent('quiz_complete', {
        result_archetype: resultType,
        result_title: result.title
    });
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function restartQuiz() {
    window.location.reload();
}

// Event Listeners
// Event Listeners
restartBtn.addEventListener("click", restartQuiz);
nextBtn.addEventListener("click", nextQuestion);

topShareBtn.addEventListener("click", async () => {
    const description = resultDescription.textContent;
    // Extract title (first line) from description
    const title = description.split('\n')[0];
    const shareText = `I got "${title}"! 💘\nFind your romantic archetype here:`;
    const url = window.location.href;

    // Track Share Click
    trackEvent('share_result', { method: navigator.share ? 'native_share' : 'clipboard_copy' });

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

        // Visual feedback on the button
        const originalContent = topShareBtn.innerHTML;
        topShareBtn.innerHTML = "✅"; // Simple checkmark feedback
        setTimeout(() => {
            topShareBtn.innerHTML = originalContent;
        }, 2000);

        // Optional: Open Twitter intent
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}`;
        window.open(twitterUrl, '_blank');
    }
});

window.addEventListener("click", (event) => {
    if (event.target === resultModal) {
        restartQuiz();
    }
});

// Initialize
loadQuestion();

// Analytics Helper
function trackEvent(eventName, params = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, params);
    } else {
        console.log('Analytics Event:', eventName, params);
    }
}

// Track Store Clicks
document.querySelectorAll('.store-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const store = btn.classList.contains('google-play') ? 'google_play' : 'app_store';
        trackEvent('download_click', { store: store });
    });
});

function preloadImages() {
    console.log("Starting background image preload...");
    for (const key in archetypes) {
        if (archetypes.hasOwnProperty(key)) {
            const characters = archetypes[key].characters;
            characters.forEach(character => {
                if (character.imageSrc) {
                    const img = new Image();
                    img.src = character.imageSrc;
                }
            });
        }
    }
}


