// Get the login and registration forms
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Get the navbar pills
const pills = document.querySelectorAll('.nav-pills li');

// Add event listeners to the pills to switch between forms
pills.forEach(pill => {
  pill.addEventListener('click', event => {
    // Remove the 'active' class from all pills
    pills.forEach(p => p.classList.remove('active'));

    // Add the 'active' class to the clicked pill
    pill.classList.add('active');

    // Show the appropriate form and hide the other form
    if (event.target.getAttribute('href') === '#login-form') {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
    } else {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
    }

    // Prevent the default link behavior
    event.preventDefault();
  });
});
