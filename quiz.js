let currentIndex = 0;
let filteredEmails = [];
let timer;
let timeLeft;

function startGame(level) {
    // 1. Show the quiz screen, hide setup
    document.getElementById('setup-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // 2. Filter data by difficulty (assuming your JSON has a 'difficulty' field)
    filteredEmails = emailDatabase.filter(email => email.difficulty === level);
    
    // 3. Set timer based on difficulty
    if (level === 'easy') timeLeft = 20;
    else if (level === 'medium') timeLeft = 15;
    else timeLeft = 10;

    loadQuestion();
}

function startTimer() {
    clearInterval(timer);
    let timeLabel = document.getElementById('timer-display');
    
    timer = setInterval(() => {
        timeLeft--;
        timeLabel.innerText = "Time Remaining: " + timeLeft + "s";
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleAnswer('timeout');
        }
    }, 1000);
}

function loadQuestion() {
    if (currentIndex < filteredEmails.length) {
        renderEmail(filteredEmails[currentIndex]);
        startTimer();
    } else {
        alert("Quiz Complete!");
    }
}

// Button Clicks
document.getElementById('btn-scam').addEventListener('click', () => handleAnswer(true));
document.getElementById('btn-legit').addEventListener('click', () => handleAnswer(false));

// Keyboard Controls (A and B)
document.addEventListener('keydown', (e) => {
    if (document.getElementById('quiz-screen').style.display === 'block') {
        if (e.key.toLowerCase() === 'a') handleAnswer(true);
        if (e.key.toLowerCase() === 'b') handleAnswer(false);
    }
});

function handleAnswer(userChoice) {
    clearInterval(timer);
    const actual = filteredEmails[currentIndex].isPhish;

    if (userChoice === 'timeout') {
        alert("Too slow! This was a " + (actual ? "Scam" : "Legit email"));
    } else if (userChoice === actual) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }

    currentIndex++;
    // Reset time for next question
    timeLeft = 15; 
    loadQuestion();
}
