document.getElementById('open-modal').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    startCountdown(3); // Start countdown from 3 seconds
});

document.getElementById('close-modal').addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
});

function startCountdown(seconds) {
    const timerDisplay = document.getElementById('timer');
    let timeLeft = seconds;

    // Update timer display immediately
    timerDisplay.textContent = timeLeft;

    const countdownInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft; // Update display

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "Time's up!";
            setTimeout(() => {
                const modal = document.getElementById('modal');
                modal.classList.add('hidden'); // Close modal after 3 seconds
            }, 3000); // Wait for 3 seconds before closing
        }
    }, 1000); // Update every second
}
