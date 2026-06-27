// ===============================
// CyberOX Login System
// ===============================

// Login credentials
const USERNAME = "aratimak";
const PASSWORD = "anshumak";

// Login Function
function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === USERNAME && password === PASSWORD) {

        // Success message
        alert("Login Successful!");

        // Redirect to Home Page
        window.location.href = "home.html";

    } else {

        // Wrong username or password
        alert("Username or Password is Incorrect!");

        // Clear password field
        document.getElementById("password").value = "";

        // Focus on username
        document.getElementById("username").focus();
    }
}

// Press Enter to Login
document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        login();
    }

});

// Show / Hide Password
const passwordInput = document.getElementById("password");

const eyeIcon = document.createElement("i");

eyeIcon.className = "bi bi-eye-fill";

eyeIcon.style.position = "absolute";
eyeIcon.style.right = "40px";
eyeIcon.style.top = "50%";
eyeIcon.style.transform = "translateY(-50%)";
eyeIcon.style.cursor = "pointer";
eyeIcon.style.color = "#7fd4ff";

passwordInput.parentElement.appendChild(eyeIcon);

eyeIcon.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        eyeIcon.className = "bi bi-eye-slash-fill";

    } else {

        passwordInput.type = "password";
        eyeIcon.className = "bi bi-eye-fill";

    }

});

// Input Glow Effect
const inputs = document.querySelectorAll("input");

inputs.forEach(input => {

    input.addEventListener("focus", () => {

        input.style.borderBottom = "2px solid #00d9ff";
        input.style.boxShadow = "0 8px 15px rgba(0,180,255,.25)";

    });

    input.addEventListener("blur", () => {

        input.style.borderBottom = "2px solid #8ebdff";
        input.style.boxShadow = "none";

    });

});

// Button Hover Animation
const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {

    button.style.transform = "scale(1.03)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "scale(1)";

});

// Small Welcome Animation
window.onload = function () {

    document.querySelector(".login-container").style.opacity = "0";

    document.querySelector(".login-container").style.transform = "translateY(30px)";

    setTimeout(() => {

        document.querySelector(".login-container").style.transition = "0.8s";

        document.querySelector(".login-container").style.opacity = "1";

        document.querySelector(".login-container").style.transform = "translateY(0px)";

    }, 200);

};