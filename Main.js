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

// / Mocking the Data for Dashboard Stats
document.addEventListener('DOMContentLoaded', function () {
      // Simulate fetching data from a database or API
      setTimeout(function () {
            document.getElementById('students-count').textContent = "150";
            document.getElementById('teachers-count').textContent = "25";
            document.getElementById('classes-count').textContent = "10";
            document.getElementById('courses-count').textContent = "30";
      }, 1000); // Simulate a delay in loading the data (1 second)

      // Profile and Notifications Button Handlers
      document.getElementById('profile-btn').addEventListener('click', function () {
            alert("Profile clicked!");
      });

      document.getElementById('notifications-btn').addEventListener('click', function () {
            alert("Notifications clicked!");
      });
});