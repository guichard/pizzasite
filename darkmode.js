
// Select buttons
const moonButton = document.getElementById('moon-button');
const sunButton = document.getElementById('sun-button');
const body = document.body;

// Function to enable dark mode
moonButton.addEventListener('click', function() {
    body.classList.add('dark-mode'); // Add dark mode class
});

// Function to enable light mode
sunButton.addEventListener('click', function() {
    body.classList.remove('dark-mode'); // Remove dark mode class to go to light mode
});
