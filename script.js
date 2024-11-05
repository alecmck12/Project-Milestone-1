// Basic form validation and interaction
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve the values from the 'name' and 'email' input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simple validation to check if both fields are filled out
    if (name && email) {
        // Send the data to the server
        fetch('/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`
        })
        .then(response => response.text())
        .then(message => {
            // Display the server's response message
            document.getElementById('formMessage').innerText = message;
        })
        .catch(error => {
            console.error("Error submitting form:", error);
            document.getElementById('formMessage').innerText = "There was an error submitting the form. Please try again.";
        });
    } else {
        // If either field is empty, prompt the user to fill in all fields
        document.getElementById('formMessage').innerText = 'Please fill in all fields.';
    }
});
