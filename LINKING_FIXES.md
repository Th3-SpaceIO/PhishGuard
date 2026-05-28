# PhishGuard Code Linking Fixes

## Overview
This document details the fixes made to properly link files from different developers:
- **Dev 1**: quiz1.js, style.css, index.html, emailviewer.js
- **Dev 2**: member5.js
- **User**: dashboard.js, feedback.js, scoring.js, storage.js, dashboard.html

## Problem Statement
The files were not properly linked together:
- Quiz (quiz1.js) didn't save results to localStorage
- Quiz used its own scoring instead of the centralized scoring.js
- No navigation between quiz and dashboard
- Dashboard had broken navigation link to non-existent file
- storage.js and scoring.js were not loaded in index.html

## Changes Made

### 1. index.html
**Location**: Lines 51-57

**Before:**
```html
<script src="Member5.js"></script>
<script src="quiz1.js"></script>
```

**After:**
```html
<script src="Member5.js"></script>
<script src="storage.js"></script>
<script src="scoring.js"></script>
<script src="quiz1.js"></script>
```

**Change**: Added `storage.js` and `scoring.js` script tags so quiz1.js can access the user's storage and scoring functions.

---

**Location**: Lines 44-51

**Before:**
```html
<div id="results-screen" style="display: none;">
    <h2>Quiz Complete!</h2>
    <h1 id="final-score">Final Score: 0</h1>
    <button onclick="restartGame()">Try Again</button>
</div>
```

**After:**
```html
<div id="results-screen" style="display: none;">
    <h2>Quiz Complete!</h2>
    <h1 id="final-score">Final Score: 0</h1>
    <div class="action-buttons">
        <button onclick="restartGame()">Try Again</button>
        <button onclick="viewDashboard()">View Dashboard</button>
    </div>
</div>
```

**Change**: Added "View Dashboard" button to results screen for navigation to dashboard.html.

---

### 2. quiz1.js
**Location**: Lines 1-6

**Before:**
```javascript
let currentEmailIndex = 0;
let score = 0;
let filteredEmails = [];
let resultsSummary = [];
let timer;
let timeLeft;
```

**After:**
```javascript
let currentEmailIndex = 0;
let filteredEmails = [];
let resultsSummary = [];
let timer;
let timeLeft;
let currentDifficulty = '';
```

**Change**: Removed local `score` variable (now using scoring.js), added `currentDifficulty` to track level for storage.

---

**Location**: Lines 8-36 (startGame function)

**Before:**
```javascript
function startGame(level) {
    let searchLevel = level === 'hard' ? 'difficult' : level;
    filteredEmails = emailDatabase.filter(email => email.difficulty_level === searchLevel);
    
    if (filteredEmails.length === 0) {
        alert("No emails found for this level!");
        return;
    }

    currentEmailIndex = 0;
    score = 0;
    resultsSummary = [];
    
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('results-screen').style.display = 'none';
    
    if (level === 'easy') timeLeft = 30;
    else if (level === 'medium') timeLeft = 20;
    else timeLeft = 15;

    loadEmail();
}
```

**After:**
```javascript
function startGame(level) {
    let searchLevel = level === 'hard' ? 'difficult' : level;
    currentDifficulty = level;

    filteredEmails = emailDatabase.filter(email => email.difficulty_level === searchLevel);
    
    if (filteredEmails.length === 0) {
        alert("No emails found for this level!");
        return;
    }

    currentEmailIndex = 0;
    resultsSummary = [];
    resetScoring();  // Now using scoring.js
    
    document.getElementById('menu-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    document.getElementById('results-screen').style.display = 'none';
    
    if (level === 'easy') timeLeft = 30;
    else if (level === 'medium') timeLeft = 20;
    else timeLeft = 15;

    loadEmail();
}
```

**Change**: 
- Added `currentDifficulty = level` to track difficulty
- Replaced `score = 0` with `resetScoring()` from scoring.js

---

**Location**: Lines 59-79 (handleAnswer function)

**Before:**
```javascript
function handleAnswer(userChoice) {
    clearInterval(timer);
    const email = filteredEmails[currentEmailIndex];
    const isCorrect = (userChoice === email.label);
    
    if (isCorrect) {
        score += 10;
    }

    resultsSummary.push({
        subject: email.subject,
        userChoice: userChoice,
        correctLabel: email.label,
        status: isCorrect ? "Correct" : "Incorrect"
    });

    currentEmailIndex++;
    loadEmail();
}
```

**After:**
```javascript
function handleAnswer(userChoice) {
    clearInterval(timer);
    const email = filteredEmails[currentEmailIndex];
    const isCorrect = (userChoice === email.label);
    
    // Use scoring.js for consistent scoring
    addQuestion();
    const pointsEarned = calculateAnswerPoints(isCorrect);

    resultsSummary.push({
        subject: email.subject,
        userChoice: userChoice,
        correctLabel: email.label,
        status: isCorrect ? "Correct" : "Incorrect"
    });

    currentEmailIndex++;
    loadEmail();
}
```

**Change**: 
- Replaced local scoring logic with scoring.js functions
- Calls `addQuestion()` to increment question count
- Calls `calculateAnswerPoints(isCorrect)` for consistent scoring with streak bonuses

---

**Location**: Lines 102-123 (endGame function)

**Before:**
```javascript
function endGame() {
    clearInterval(timer);
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
    
    document.getElementById('final-score').innerText = `Final Score: ${score}`;
    
    console.log("Game Over. Detailed Results:", resultsSummary);
}
```

**After:**
```javascript
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
    const category = filteredEmails.length > 0 ? 
        (filteredEmails[0].social_engineering_type || 'General') : 'General';
    
    saveQuizResult(correctAnswers, totalQuestions, category, currentDifficulty);
    
    console.log("Game Over. Detailed Results:", resultsSummary);
}
```

**Change**: 
- Gets final stats from scoring.js functions
- Saves results to localStorage using `saveQuizResult()` from storage.js
- Determines category from email data for dashboard categorization

---

**Location**: Lines 125-132

**Before:**
```javascript
function restartGame() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
}
```

**After:**
```javascript
function restartGame() {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'block';
}

function viewDashboard() {
    window.location.href = 'dashboard.html';
}
```

**Change**: Added `viewDashboard()` function for navigation to dashboard.

---

### 3. dashboard.js
**Location**: Lines 216-219

**Before:**
```javascript
function startNewQuiz() {
    window.location.href = 'phishguard_quiz_ui_mockup.html';
}
```

**After:**
```javascript
function startNewQuiz() {
    window.location.href = 'index.html';
}
```

**Change**: Fixed navigation link from non-existent `phishguard_quiz_ui_mockup.html` to actual `index.html`.

---

## Resulting Data Flow

### Quiz Flow
1. User starts quiz in `index.html`
2. `quiz1.js` loads emails from `member5.js` database
3. User answers questions
4. `scoring.js` calculates points with streak bonuses
5. `storage.js` saves results to localStorage
6. User can navigate to dashboard via "View Dashboard" button

### Dashboard Flow
1. User opens `dashboard.html`
2. `dashboard.js` loads
3. `storage.js` retrieves saved quiz results from localStorage
4. Dashboard displays stats, charts, and session history
5. User can start new quiz via "New quiz" button → navigates to `index.html`

## Files Not Modified
- `member5.js` - Email database (no changes needed)
- `style.css` - Quiz styling (no changes needed)
- `emailviewer.js` - Not currently used (optional integration)
- `feedback.js` - Not currently used (optional integration for better UX)
- `storage.js` - No changes needed (functions used as-is)
- `scoring.js` - No changes needed (functions used as-is)
- `dashboard.html` - No changes needed (already loads correct scripts)

## Optional Future Enhancements
- Integrate `feedback.js` to show detailed feedback modal after each answer
- Integrate `emailviewer.js` for consistent email rendering
- Add category selection in quiz for better dashboard categorization
