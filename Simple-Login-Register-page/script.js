// Toggle between login and register forms
function showLogin() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const leftTitle = document.getElementById("left-title");
    const leftText = document.getElementById("left-text");
  
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
  
    leftTitle.textContent = "Welcome Back!";
    leftText.textContent = "To keep connected, please log in with your credentials.";
  }
  
  function showRegister() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const leftTitle = document.getElementById("left-title");
    const leftText = document.getElementById("left-text");
  
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
  
    leftTitle.textContent = "Join Us!";
    leftText.textContent = "Create an account to enjoy our services.";
  }
  
  // Display current time
  function updateTime() {
    const currentTime = document.getElementById("current-time");
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString();
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  updateTime();
  