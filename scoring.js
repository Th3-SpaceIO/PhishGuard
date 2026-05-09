// Scoring functions for PhishGuard
// This file handles points, streaks, and accuracy

// Scoring settings
const POINTS_PER_CORRECT = 10;  // Points for each correct answer
const STREAK_BONUS_THRESHOLD = 3;  // How many correct answers for bonus
const STREAK_BONUS_POINTS = 50;  // Bonus points for streak

// Current game variables
let currentStreak = 0;  // Current streak of correct answers
let totalScore = 0;  // Total points in current session
let correctAnswers = 0;  // Number of correct answers this session
let totalQuestions = 0;  // Total questions attempted this session
let bestStreak = 0;  // Best streak this session

// Calculate points for an answer
function calculateAnswerPoints(isCorrect) {
    // If answer is wrong, reset streak and give 0 points
    if (!isCorrect) {
        currentStreak = 0;
        return 0;
    }
    
    let points = POINTS_PER_CORRECT;
    
    // Increase streak and correct answers count
    currentStreak = currentStreak + 1;
    correctAnswers = correctAnswers + 1;
    
    // Check for streak bonus (every 3 correct answers)
    if (currentStreak % STREAK_BONUS_THRESHOLD === 0) {
        points = points + STREAK_BONUS_POINTS;
    }
    
    // Add points to total score
    totalScore = totalScore + points;
    
    // Update best streak if current is higher
    if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
    }
    
    return points;
}

// Calculate accuracy percentage
function calculateAccuracy(correct, total) {
    // Avoid division by zero
    if (total === 0) {
        return 0;
    }
    
    return Math.round((correct / total) * 100);
}

// Get current streak
function getCurrentStreak() {
    return currentStreak;
}

// Get total score for current session
function getTotalScore() {
    return totalScore;
}

// Get best streak this session
function getBestStreak() {
    return bestStreak;
}

// Get number of correct answers this session
function getCorrectAnswers() {
    return correctAnswers;
}

// Get total questions attempted this session
function getTotalQuestions() {
    return totalQuestions;
}

// Add 1 to total questions count
function addQuestion() {
    totalQuestions = totalQuestions + 1;
}

// Get accuracy for current session
function getSessionAccuracy() {
    return calculateAccuracy(correctAnswers, totalQuestions);
}

// Reset all scoring for new quiz
function resetScoring() {
    currentStreak = 0;
    totalScore = 0;
    correctAnswers = 0;
    totalQuestions = 0;
    bestStreak = 0;
}

// Get all current scoring info
function getSessionStats() {
    let stats = {
        streak: currentStreak,
        score: totalScore,
        bestStreak: bestStreak,
        correct: correctAnswers,
        total: totalQuestions,
        accuracy: getSessionAccuracy()
    };
    
    return stats;
}

// Get performance level based on accuracy
function getPerformanceLevel(accuracy) {
    if (accuracy >= 80) {
        return 'High';
    } else if (accuracy >= 60) {
        return 'Medium';
    } else {
        return 'Low';
    }
}

// Get session summary to save
function getSessionSummary(category, difficulty) {
    let summary = {
        score: correctAnswers,
        total: totalQuestions,
        category: category,
        difficulty: difficulty,
        points: totalScore,
        bestStreak: bestStreak,
        accuracy: getSessionAccuracy()
    };
    
    return summary;
}
