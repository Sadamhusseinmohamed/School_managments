document.getElementById('login-form').addEventListener('submit', function (event) {
      event.preventDefault();

      let username = document.getElementById('username').value;
      let password = document.getElementById('password').value;

      // Simple Validation
      if (username === "" || password === "") {
            alert("Both fields are required.");
      } else {
            // Here, you would typically send the credentials to a backend server for verification.
            // For now, let's just simulate successful login.
            alert("Logged in successfully!");

            // Redirect to Dashboard page
            window.location.href = 'dashboard.html';
      }
});
