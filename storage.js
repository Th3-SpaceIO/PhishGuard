// Storage functions for PhishGuard quiz
// This file saves and loads quiz data using browser's localStorage

// The key we use to save data in localStorage
const STORAGE_KEY = 'phishguard_quiz_data';

// Save a quiz result to localStorage
function saveQuizResult(score, total, category, difficulty) {
    // Get existing quiz results
    let allResults = getScoreHistory();
    
    // Create new result object
    let newResult = {
        date: new Date().toISOString(),
        score: score,
        total: total,
        category: category,
        difficulty: difficulty,
        accuracy: Math.round((score / total) * 100)
    };
    
    // Add new result to the beginning of the array
    allResults.unshift(newResult);
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allResults));
    
    return true;
}

// Get all past quiz scores from localStorage
function getScoreHistory() {
    // Try to get data from localStorage
    let savedData = localStorage.getItem(STORAGE_KEY);
    
    // If no data exists, return empty array
    if (!savedData) {
        return [];
    }
    
    // Parse and return the data
    return JSON.parse(savedData);
}

// Clear all PhishGuard data from localStorage
function clearHistory() {
    localStorage.removeItem(STORAGE_KEY);
    return true;
}

// Get only the most recent quiz results
function getRecentResults(howMany) {
    // Default to 5 if no number specified
    if (!howMany) {
        howMany = 5;
    }
    
    let allResults = getScoreHistory();
    return allResults.slice(0, howMany);
}

// Calculate total points earned across all sessions
function getTotalPoints() {
    let allResults = getScoreHistory();
    let totalPoints = 0;
    
    // Add up all scores
    for (let i = 0; i < allResults.length; i++) {
        totalPoints = totalPoints + allResults[i].score;
    }
    
    return totalPoints;
}

// Find the highest score (used as best streak for now)
function getHighestStreak() {
    let allResults = getScoreHistory();
    let highestScore = 0;
    
    // Find the highest score
    for (let i = 0; i < allResults.length; i++) {
        if (allResults[i].score > highestScore) {
            highestScore = allResults[i].score;
        }
    }
    
    return highestScore;
}

// Calculate overall accuracy across all sessions
function getOverallAccuracy() {
    let allResults = getScoreHistory();
    
    // If no results, return 0
    if (allResults.length === 0) {
        return 0;
    }
    
    let totalCorrect = 0;
    let totalQuestions = 0;
    
    // Add up all correct answers and total questions
    for (let i = 0; i < allResults.length; i++) {
        totalCorrect = totalCorrect + allResults[i].score;
        totalQuestions = totalQuestions + allResults[i].total;
    }
    
    // Calculate percentage
    return Math.round((totalCorrect / totalQuestions) * 100);
}
