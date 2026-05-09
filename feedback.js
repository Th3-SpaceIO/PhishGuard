/**
 * Feedback module for PhishGuard
 * Controls the modal overlay that shows answer feedback
 */

// Modal state
let isModalOpen = false;
let currentFeedbackData = null;

/**
 * Shows the feedback modal with answer results
 * @param {boolean} isCorrect - Whether the user's answer was correct
 * @param {Object} emailData - Email object containing explanation and flags
 * @param {number} pointsEarned - Points earned for this answer
 * @param {number} currentStreak - Current streak count
 */
function showFeedbackModal(isCorrect, emailData, pointsEarned, currentStreak) {
    currentFeedbackData = {
        isCorrect: isCorrect,
        emailData: emailData,
        pointsEarned: pointsEarned,
        currentStreak: currentStreak
    };
    
    createFeedbackModal();
    isModalOpen = true;
    
    // Add event listener for ESC key to close modal
    document.addEventListener('keydown', handleEscapeKey);
}

/**
 * Creates and displays the feedback modal in the DOM
 */
function createFeedbackModal() {
    // Remove existing modal if present
    removeExistingModal();
    
    const modal = document.createElement('div');
    modal.id = 'feedback-modal';
    modal.className = 'feedback-modal-overlay';
    
    const modalContent = createModalContent();
    modal.appendChild(modalContent);
    
    // Add modal styles
    addModalStyles();
    
    // Append to body
    document.body.appendChild(modal);
    
    // Add fade-in animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

/**
 * Creates the modal content based on current feedback data
 * @returns {HTMLElement} Modal content element
 */
function createModalContent() {
    const { isCorrect, emailData, pointsEarned, currentStreak } = currentFeedbackData;
    
    const modalContent = document.createElement('div');
    modalContent.className = 'feedback-modal-content';
    
    // Create header
    const header = createModalHeader(isCorrect, pointsEarned, currentStreak);
    modalContent.appendChild(header);
    
    // Create body
    const body = createModalBody(isCorrect, emailData);
    modalContent.appendChild(body);
    
    return modalContent;
}

/**
 * Creates the modal header with result status and points
 * @param {boolean} isCorrect - Whether the answer was correct
 * @param {number} pointsEarned - Points earned
 * @param {number} currentStreak - Current streak
 * @returns {HTMLElement} Header element
 */
function createModalHeader(isCorrect, pointsEarned, currentStreak) {
    const header = document.createElement('div');
    header.className = `feedback-header ${isCorrect ? 'correct' : 'wrong'}`;
    
    const icon = document.createElement('div');
    icon.className = `feedback-icon ${isCorrect ? 'correct' : 'wrong'}`;
    icon.innerHTML = isCorrect 
        ? '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        : '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    
    const titleContent = document.createElement('div');
    const title = document.createElement('div');
    title.className = `feedback-title ${isCorrect ? 'correct' : 'wrong'}`;
    title.textContent = isCorrect 
        ? `Correct — ${emailData.isPhishing ? 'this is phishing' : 'this is legitimate'}`
        : `Incorrect — ${emailData.isPhishing ? 'this is actually phishing' : 'this is actually legitimate'}`;
    
    const subtitle = document.createElement('div');
    subtitle.style.cssText = 'font-size: 11px; margin-top: 2px;';
    subtitle.style.color = isCorrect ? '#3B6D11' : '#791F1F';
    subtitle.textContent = isCorrect 
        ? `+${pointsEarned} points${currentStreak > 1 ? ` · ${currentStreak} streak` : ''}`
        : 'Streak reset';
    
    titleContent.appendChild(title);
    titleContent.appendChild(subtitle);
    
    header.appendChild(icon);
    header.appendChild(titleContent);
    
    return header;
}

/**
 * Creates the modal body with explanation and flags
 * @param {boolean} isCorrect - Whether the answer was correct
 * @param {Object} emailData - Email data object
 * @returns {HTMLElement} Body element
 */
function createModalBody(isCorrect, emailData) {
    const body = document.createElement('div');
    body.className = 'feedback-body';
    
    // Create flags section
    const flagsSection = createFlagsSection(emailData);
    body.appendChild(flagsSection);
    
    // Create explanation section
    const explanationSection = createExplanationSection(emailData);
    body.appendChild(explanationSection);
    
    // Create next button
    const nextButton = createNextButton();
    body.appendChild(nextButton);
    
    return body;
}

/**
 * Creates the section showing red flags or trust signals
 * @param {Object} emailData - Email data object
 * @returns {HTMLElement} Flags section element
 */
function createFlagsSection(emailData) {
    const section = document.createElement('div');
    section.className = 'feedback-section';
    
    const label = document.createElement('div');
    label.className = 'feedback-section-label';
    label.textContent = emailData.isPhishing ? 'Red flags in this email' : 'Trust signals in this email';
    section.appendChild(label);
    
    const flagsList = document.createElement('div');
    flagsList.className = 'red-flag-list';
    
    const flags = emailData.isPhishing ? emailData.redFlags : emailData.trustSignals;
    
    if (flags && flags.length > 0) {
        flags.forEach(flag => {
            const flagItem = createFlagItem(flag);
            flagsList.appendChild(flagItem);
        });
    } else {
        const noFlags = document.createElement('div');
        noFlags.style.cssText = 'font-size: 12px; color: #6c757d; font-style: italic;';
        noFlags.textContent = emailData.isPhishing 
            ? 'No obvious red flags detected'
            : 'No specific trust signals highlighted';
        flagsList.appendChild(noFlags);
    }
    
    section.appendChild(flagsList);
    return section;
}

/**
 * Creates an individual flag item
 * @param {string} flagText - Flag description text
 * @returns {HTMLElement} Flag item element
 */
function createFlagItem(flagText) {
    const flagItem = document.createElement('div');
    flagItem.className = 'red-flag';
    
    const dot = document.createElement('div');
    dot.className = 'flag-dot';
    
    const text = document.createElement('span');
    text.textContent = flagText;
    
    flagItem.appendChild(dot);
    flagItem.appendChild(text);
    
    return flagItem;
}

/**
 * Creates the explanation section
 * @param {Object} emailData - Email data object
 * @returns {HTMLElement} Explanation section element
 */
function createExplanationSection(emailData) {
    const section = document.createElement('div');
    section.className = 'feedback-section';
    section.style.marginBottom = '14px';
    
    const label = document.createElement('div');
    label.className = 'feedback-section-label';
    label.textContent = 'Why this works on people';
    section.appendChild(label);
    
    const explanation = document.createElement('div');
    explanation.className = 'explanation-text';
    explanation.textContent = emailData.explanation || 'No explanation available for this email.';
    section.appendChild(explanation);
    
    return section;
}

/**
 * Creates the next question button
 * @returns {HTMLElement} Button element
 */
function createNextButton() {
    const button = document.createElement('button');
    button.className = 'next-btn';
    button.textContent = 'Next question →';
    button.onclick = closeFeedbackModal;
    
    return button;
}

/**
 * Closes the feedback modal
 */
function closeFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
    
    isModalOpen = false;
    currentFeedbackData = null;
    
    // Remove event listener
    document.removeEventListener('keydown', handleEscapeKey);
    
    // Call callback if provided
    if (typeof window.onFeedbackClosed === 'function') {
        window.onFeedbackClosed();
    }
}

/**
 * Handles ESC key press to close modal
 * @param {KeyboardEvent} event - Keyboard event
 */
function handleEscapeKey(event) {
    if (event.key === 'Escape' && isModalOpen) {
        closeFeedbackModal();
    }
}

/**
 * Removes any existing feedback modal
 */
function removeExistingModal() {
    const existingModal = document.getElementById('feedback-modal');
    if (existingModal) {
        existingModal.remove();
    }
}

/**
 * Adds the necessary CSS styles for the modal
 */
function addModalStyles() {
    // Check if styles already exist
    if (document.getElementById('feedback-modal-styles')) {
        return;
    }
    
    const styles = document.createElement('style');
    styles.id = 'feedback-modal-styles';
    styles.textContent = `
        .feedback-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .feedback-modal-overlay.show {
            opacity: 1;
        }
        
        .feedback-modal-content {
            background: white;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .feedback-header {
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid #f1f3f4;
        }
        
        .feedback-header.correct {
            background: #EAF3DE;
        }
        
        .feedback-header.wrong {
            background: #FCEBEB;
        }
        
        .feedback-icon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }
        
        .feedback-icon.correct {
            background: #639922;
        }
        
        .feedback-icon.wrong {
            background: #E24B4A;
        }
        
        .feedback-title {
            font-size: 16px;
            font-weight: 500;
        }
        
        .feedback-title.correct {
            color: #27500A;
        }
        
        .feedback-title.wrong {
            color: #791F1F;
        }
        
        .feedback-body {
            padding: 16px;
        }
        
        .feedback-section {
            margin-bottom: 16px;
        }
        
        .feedback-section-label {
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            color: #adb5bd;
            margin-bottom: 8px;
        }
        
        .red-flag-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        
        .red-flag {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            font-size: 13px;
            color: #495057;
            line-height: 1.5;
        }
        
        .flag-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #E24B4A;
            margin-top: 6px;
            flex-shrink: 0;
        }
        
        .explanation-text {
            font-size: 14px;
            color: #495057;
            line-height: 1.6;
        }
        
        .next-btn {
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            border: none;
            background: #1B4F8C;
            color: white;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s ease;
        }
        
        .next-btn:hover {
            background: #163a70;
        }
        
        @media (max-width: 480px) {
            .feedback-modal-content {
                width: 95%;
                margin: 10px;
            }
            
            .feedback-header {
                padding: 12px;
            }
            
            .feedback-body {
                padding: 12px;
            }
        }
    `;
    
    document.head.appendChild(styles);
}

/**
 * Checks if the modal is currently open
 * @returns {boolean} True if modal is open
 */
function isFeedbackModalOpen() {
    return isModalOpen;
}

/**
 * Gets the current feedback data
 * @returns {Object|null} Current feedback data or null
 */
function getCurrentFeedbackData() {
    return currentFeedbackData;
}
