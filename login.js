// login.js
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here, you can implement the login functionality.
    // For a simple example, you can check if the email and password match some predefined values.
    if (email === 'your_email' && password === 'your_password') {
        alert('Login successful!'); // You can redirect to the user account page here.
    } else {
        alert('Login failed. Please check your email and password.');
    }
});
