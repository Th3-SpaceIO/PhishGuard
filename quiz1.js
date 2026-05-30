let currentEmailIndex = 0;
let filteredEmails = [];
let resultsSummary = []; // Tracks performance for the end screen
let timer;
let timeLeft;
let currentDifficulty = '';

// 1. Start the Game
function startGame(level) {
    // Member 5 uses "hard" directly now instead of "difficult", 
    // but we use a fallback just in case some items still use the old label.
    let searchLevel = level;
    currentDifficulty = level;

    // Filter the master database using the new 'difficulty' key name
    filteredEmails = emailDatabase.filter(email => {
        // Safe fallback: read their new 'difficulty' key, or use 'difficulty_level' if it's an old item
        const emailLevel = email.difficulty || email.difficulty_level;
        
        // Match 'hard' to either 'hard' or 'difficult' to cover all bases
        if (searchLevel === 'hard') {
            return emailLevel === 'hard' || emailLevel === 'difficult';
        }
        return emailLevel === searchLevel;
    });
    
    if (filteredEmails.length === 0) {
        alert("No emails found for this level!");
        return;
    }

    // Reset game state and scoring
    currentEmailIndex = 0;
    resultsSummary = [];
    resetScoring();
    
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('results-screen').style.display = 'none';
    
    // Difficulty-based timer
    if (level === 'easy') timeLeft = 30;
    else if (level === 'medium') timeLeft = 20;
    else timeLeft = 15;

    loadEmail();
}

// 2. Load Email to UI
function loadEmail() {
    if (currentEmailIndex >= filteredEmails.length) {
        endGame();
        return;
    }

    const email = filteredEmails[currentEmailIndex];
    
    // Update the UI fields
    document.getElementById('email-sender').innerHTML = `<strong>From:</strong> ${email.sender}`;
    document.getElementById('email-subject').innerHTML = `<strong>Subject:</strong> ${email.subject}`;
    document.getElementById('email-body').innerText = email.body;
    
    // Update progress
    document.getElementById('progress').innerText = `Email ${currentEmailIndex + 1} of ${filteredEmails.length}`;
    
    startTimer();
}

// 3. Handle Answer (Silent Mode)
function handleAnswer(userChoice) {
    clearInterval(timer);
    const email = filteredEmails[currentEmailIndex];
    const isCorrect = (userChoice === email.label);
    
    // Use scoring.js for consistent scoring
    addQuestion();
    const pointsEarned = calculateAnswerPoints(isCorrect);

    // Store data for the final report
    resultsSummary.push({
        subject: email.subject,
        userChoice: userChoice,
        correctLabel: email.label,
        status: isCorrect ? "Correct" : "Incorrect"
    });

    // Move to next email immediately
    currentEmailIndex++;
    loadEmail();
}

// 4. Timer Logic
function startTimer() {
    clearInterval(timer);
    let currentTimerLeft = timeLeft;
    const timeDisplay = document.getElementById('timer-display');
    
    timeDisplay.innerText = `Time: ${currentTimerLeft}s`;
    
    timer = setInterval(() => {
        currentTimerLeft--;
        timeDisplay.innerText = `Time: ${currentTimerLeft}s`;
        
        if (currentTimerLeft <= 0) {
            clearInterval(timer);
            // Treat time-out as an incorrect answer
            handleAnswer('timeout'); 
        }
    }, 1000);
}

// 5. End Game and Show Score
function endGame() {
    clearInterval(timer);
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
    
    // Get final score from scoring.js
    const finalScore = getTotalScore();
    const totalQuestions = getTotalQuestions();
    const correctAnswers = getCorrectAnswers();
    
    document.getElementById('final-score').innerText = `Final Score: ${finalScore}`;
    
    // Save results to localStorage using storage.js
    // Determine category based on emails (simplified - uses first email's category or 'Mixed')
    const category = filteredEmails.length > 0 ? 
        (filteredEmails[0].social_engineering_type || 'General') : 'General';
    
    saveQuizResult(correctAnswers, totalQuestions, category, currentDifficulty);
    
    console.log("Game Over. Detailed Results:", resultsSummary);
}

function restartGame() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
}

function viewDashboard() {
    window.location.href = 'dashboard.html';
} 