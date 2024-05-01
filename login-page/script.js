document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Here you can implement your login logic, for now just a simple check
    if (username === 'Kennedy' && password === 'Password') {
        // Successful login, you can redirect to another page or show a success message
        window.location.href = "/ULNF Website/index.html";
    } else {
        // Display error message for invalid credentials
        document.getElementById('error-message').textContent = 'Invalid username or password';
    }
});
