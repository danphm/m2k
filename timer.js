// Function to calculate time difference
function updateTime() {
    // Set the date to count from
    const startDate = new Date('2024-05-18T00:00:00Z');
    const now = new Date();

    // Calculate the difference in milliseconds
    const difference = now - startDate;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('timer').textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial call to display the timer immediately
updateTime();
