function renderEmail(data) {
    const area = document.getElementById('email-display-area');
    const feedback = document.getElementById('feedback-message');
    if (!data) return;

    area.innerHTML = `
        <div><strong>From:</strong> ${data.sender}</div>
        <div><strong>Subject:</strong> ${data.subject}</div>
        <hr>
        <div>${data.body}</div>
    `;

    const links = area.querySelectorAll('a');
    links.forEach(l => l.onclick = (e) => {
        e.preventDefault();
        // FIXED: Using on-screen text instead of alert() so the timer doesn't stop
        feedback.innerText = "⚠️ Links are disabled for safety!";
        feedback.style.color = "orange";
        
        // Clear the warning after 2 seconds
        setTimeout(() => {
            if(feedback.innerText === "⚠️ Links are disabled for safety!") {
                feedback.innerText = "";
            }
        }, 2000);
    });
}
