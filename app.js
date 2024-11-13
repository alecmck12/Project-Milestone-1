// Import the express module to create an Express application
const express = require('express');
const app = express(); // Create an Express application
const port = 3000; // Set the port number for the server

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Serve static files from the current directory (assumes HTML files are in the main directory)
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// POST route to handle form submission from the contact form
app.post('/submit-form', (req, res) => {
    const name = req.body.name; // Access the name field from the form data
    const email = req.body.email; // Access the email field from the form data
    // Add validation logic here
    res.send(`Thank you, ${name}! Your message has been received.`); // Send a response back to the client
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // Log to indicate server is running
});
