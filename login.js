document.getElementById('signInBtn').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Replace with your actual test email and password
    var validEmail = "user@example.com";  // Replace this with the test email you want
    var validPassword = "password123";    // Replace this with the test password you want

    // Compare input email and password with the hardcoded ones
    if (email === validEmail && password === validPassword) {
        // Redirect to homepage (index.html) if the credentials are correct
        window.location.href = "index.html"; 
    } else {
        // Display error message if login fails
        alert("Invalid email or password");
    }
});

