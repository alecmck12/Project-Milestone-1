// Basic form validation and interaction
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (to stop page reload)
    event.preventDefault();

    // Retrieve the values from the 'name' and 'email' input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple validation to check if both fields are filled out
    if (name && email) {
        // Show success message (since the form does not actually submit anywhere)
        document.getElementById('formMessage').innerText = "Your message has been sent successfully!";

        // Optionally, reset the form after submission
        document.getElementById('contactForm').reset();
    } else {
        // If either field is empty, prompt the user to fill in all fields
        document.getElementById('formMessage').innerText = 'Please fill in all fields.';
    }
});
