// Dashboard functions for PhishGuard
// This file updates progress dashboard with quiz data

// Global chart instance
let categoryChart = null;

// Initialize dashboard when page loads
function initializeDashboard() {
    updateStats();
    updateChart();
    updateSessions();
}

// Update the main stats cards
function updateStats() {
    let allResults = getScoreHistory();
    
    // Calculate and display total points
    let totalPoints = calculateTotalPoints(allResults);
    document.getElementById('total-points').textContent = totalPoints;
    
    // Calculate and display accuracy
    let accuracy = calculateOverallAccuracy(allResults);
    document.getElementById('accuracy').textContent = accuracy + '%';
    
    // Find and display best streak
    let bestStreak = findBestStreak(allResults);
    document.getElementById('best-streak').textContent = bestStreak;
}

// Calculate total points from all results
function calculateTotalPoints(allResults) {
    let total = 0;
    
    // Add up all scores
    for (let i = 0; i < allResults.length; i++) {
        total = total + allResults[i].score;
    }
    
    return total;
}

// Calculate overall accuracy percentage
function calculateOverallAccuracy(allResults) {
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

// Find the best streak (highest score for now)
function findBestStreak(allResults) {
    let bestScore = 0;
    
    // Find the highest score
    for (let i = 0; i < allResults.length; i++) {
        if (allResults[i].score > bestScore) {
            bestScore = allResults[i].score;
        }
    }
    
    return bestScore;
}

// Update the category chart
function updateChart() {
    let allResults = getScoreHistory();
    let categoryData = calculateCategoryData(allResults);
    
    let ctx = document.getElementById('category-chart').getContext('2d');
    
    // Destroy existing chart if it exists
    if (categoryChart) {
        categoryChart.destroy();
    }
    
    // Colors for different categories
    let colors = {
        'Banking': '#639922',
        'Corporate': '#EF9F27',
        'Social Media': '#378ADD',
        'E-commerce': '#E24B4A',
        'Academic': '#1D9E75'
    };
    
    // Prepare data for Chart.js
    let labels = Object.keys(categoryData);
    let data = Object.values(categoryData);
    let backgroundColors = labels.map(category => colors[category] || '#6c757d');
    
    // Show message if no data
    if (labels.length === 0) {
        ctx.font = '13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        ctx.fillStyle = '#6c757d';
        ctx.textAlign = 'center';
        ctx.fillText('No quiz data available yet', ctx.canvas.width / 2, ctx.canvas.height / 2);
        return;
    }
    
    // Create new Chart.js chart
    categoryChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Accuracy %',
                data: data,
                backgroundColor: backgroundColors,
                borderRadius: 4,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a1a1a',
                    titleFont: {
                        size: 13,
                        family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    },
                    bodyFont: {
                        size: 12,
                        family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    },
                    padding: 10,
                    cornerRadius: 6,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '% accuracy';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        },
                        font: {
                            size: 11,
                            family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        },
                        color: '#6c757d'
                    },
                    grid: {
                        color: '#e9ecef',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 11,
                            family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                        },
                        color: '#6c757d'
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        }
    });
}

// Calculate accuracy for each category
function calculateCategoryData(allResults) {
    let categoryStats = {};
    
    // Group results by category
    for (let i = 0; i < allResults.length; i++) {
        let session = allResults[i];
        let category = session.category || 'Mixed';
        
        // Skip if category is null, undefined, or empty string
        if (!category || category === 'null' || category === 'undefined') {
            continue;
        }
        
        if (!categoryStats[category]) {
            categoryStats[category] = {
                correct: 0,
                total: 0
            };
        }
        
        categoryStats[category].correct = categoryStats[category].correct + session.score;
        categoryStats[category].total = categoryStats[category].total + session.total;
    }
    
    // Convert to percentages
    let categoryAccuracy = {};
    for (let category in categoryStats) {
        let stats = categoryStats[category];
        categoryAccuracy[category] = Math.round((stats.correct / stats.total) * 100);
    }
    
    return categoryAccuracy;
}

// Update the recent sessions list
function updateSessions() {
    let recentSessions = getRecentResults(5);
    let sessionsContainer = document.getElementById('recent-sessions');
    
    sessionsContainer.innerHTML = '';
    
    // Show message if no sessions
    if (recentSessions.length === 0) {
        sessionsContainer.innerHTML = 
            '<div class="empty-state">' +
                '<div class="empty-state-title">No quiz sessions yet</div>' +
                '<div class="empty-state-text">Complete your first quiz to see your progress here</div>' +
                '<button class="btn" onclick="startNewQuiz()">Start your first quiz</button>' +
            '</div>';
        return;
    }
    
    // Add each session to the list
    for (let i = 0; i < recentSessions.length; i++) {
        let session = recentSessions[i];
        let sessionRow = createSessionRow(session, i + 1);
        sessionsContainer.appendChild(sessionRow);
    }
}

// Create a row for a session
function createSessionRow(session, sessionNumber) {
    let sessionRow = document.createElement('div');
    sessionRow.className = 'history-row';
    
    // Format the date
    let date = new Date(session.date);
    let formattedDate = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
    });
    
    // Get the performance level
    let performanceLevel = getPerformanceLevel(session.accuracy);
    
    // Handle null/undefined category
    let displayCategory = session.category;
    if (!displayCategory || displayCategory === 'null' || displayCategory === 'undefined') {
        displayCategory = 'Mixed';
    }
    
    sessionRow.innerHTML = 
        '<div class="hist-session">' +
            'Session ' + sessionNumber + ' · ' + session.difficulty + ' · ' + displayCategory +
            '<br><small style="color: #adb5bd; font-size: 10px;">' + formattedDate + '</small>' +
        '</div>' +
        '<div style="display: flex; align-items: center; gap: 8px;">' +
            '<div class="hist-score">' + session.score + '/' + session.total + '</div>' +
            '<div class="hist-badge ' + performanceLevel.toLowerCase() + '">' + performanceLevel + '</div>' +
        '</div>';
    
    return sessionRow;
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

// Start a new quiz (go to quiz page)
function startNewQuiz() {
    window.location.href = 'index.html';
}

// Refresh all dashboard data
function refreshDashboard() {
    updateStats();
    updateChart();
    updateSessions();
}

// Format date for display
function formatDate(dateString) {
    let date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Get summary statistics
function getSummaryStats() {
    let allResults = getScoreHistory();
    
    let totalPoints = calculateTotalPoints(allResults);
    let averageScore = 0;
    
    if (allResults.length > 0) {
        averageScore = Math.round(totalPoints / allResults.length);
    }
    
    return {
        totalSessions: allResults.length,
        totalPoints: totalPoints,
        overallAccuracy: calculateOverallAccuracy(allResults),
        bestStreak: findBestStreak(allResults),
        averageScore: averageScore
    };
}

// Start dashboard when page is ready
document.addEventListener('DOMContentLoaded', initializeDashboard);
