document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate a server check for existing user
    const existingUsers = ['user1@example.com', 'user2@example.com']; // Example list of registered users

    if (existingUsers.includes(email)) {
        alert('User already registered. Redirecting to login page.');
        window.location.href = 'index.html';
    } else {
        // Simulate server-side user registration
        alert('User registered successfully!');
        // Here you would typically send the user data to the server
        // Example: fetch('/register', { method: 'POST', body: JSON.stringify({ username, email, password }) });

        // Redirect to login page after successful registration
        window.location.href = 'index.html';
    }
});
