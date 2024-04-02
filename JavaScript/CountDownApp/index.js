document.addEventListener("DOMContentLoaded", function () {
    // Set the date and time for the countdown (year, month (0-based), day, hour, minute, second)
    var countdownDate = new Date(2024, 3, 25, 12, 0, 0); // April 25, 2024, 12:00:00

    var countdownElement = document.getElementById("countdown");

    // Update the countdown every second
    var countdownInterval = setInterval(function () {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the time remaining
        var timeRemaining = countdownDate - now;

        // Calculate days, hours, minutes, and seconds remaining
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown
        countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the countdown is over, display a message
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Countdown expired!";
        }
    }, 1000); // Update every second
});
