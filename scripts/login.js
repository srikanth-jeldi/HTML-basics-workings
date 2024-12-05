document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Dummy credentials
    const validUsername = 'admin';
    const validPassword = 'password123';

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        window.location.href = 'success.html'; // Navigate to success page
    } else {
        window.location.href = 'failure.html'; // Navigate to failure page
    }
});
