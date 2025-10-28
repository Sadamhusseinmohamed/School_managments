// Login form submission and validation
document.getElementById('login-form').addEventListener('submit', function (event) {
      event.preventDefault();

      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      const validUsername = "admin";
      const validPassword = "password123";

      if (username === "" || password === "") {
            alert("Both fields are required.");
      } else if (username === validUsername && password === validPassword) {
            alert("Logged in successfully!");
            window.location.href = 'dashboard.html'; // Redirect to Dashboard
      } else {
            document.getElementById("error-message").style.display = "block";
      }
});

// Navbar Button Click Handlers
document.getElementById('profile-btn').addEventListener('click', function () {
      alert("Profile clicked!");
});

document.getElementById('notifications-btn').addEventListener('click', function () {
      alert("Notifications clicked!");
});
