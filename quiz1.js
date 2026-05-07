let currentEmailIndex = 0;
let score = 0;
let filteredEmails = [];
let resultsSummary = []; // Tracks performance for the end screen
let timer;
let timeLeft;

// 1. Start the Game
function startGame(level) {
    // Map "hard" to Member 5's "difficult" label
    let searchLevel = level === 'hard' ? 'difficult' : level;

    // Filter the master database from Member5.js
    filteredEmails = emailDatabase.filter(email => email.difficulty_level === searchLevel);
    
    if (filteredEmails.length === 0) {
        alert("No emails found for this level!");
        return;
    }

    // Reset game state
    currentEmailIndex = 0;
    score = 0;
    resultsSummary = []; 
    
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
    
    if (isCorrect) {
        score += 10;
    }

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
    
    document.getElementById('final-score').innerText = `Final Score: ${score}`;
    
    // Note: resultsSummary is now ready to be turned into a table!
    console.log("Game Over. Detailed Results:", resultsSummary);
}

function restartGame() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
} 