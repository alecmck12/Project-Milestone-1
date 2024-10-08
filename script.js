// Basic form validation and interaction
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Display a message if form is filled correctly
    if (name && email) {
        document.getElementById('formMessage').innerText = `Thank you, ${name}! Your message has been received.`;
    } else {
        document.getElementById('formMessage').innerText = 'Please fill in all fields.';
    }
});