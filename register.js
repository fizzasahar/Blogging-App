import { auth, createUserWithEmailAndPassword } from "./firebase.js";
// Function for registering user
let signUp = (event) => {
event.preventDefault(); // Prevent default form submission

let email = document.getElementById("Register-email").value;
let password = document.getElementById("Register-password").value;
let cPassword = document.getElementById("Register-cpassword").value;

// Regex for email and password validation
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

// Email validation check
if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

// Password validation check
if (!passwordRegex.test(password)) {
    alert("Invalid password. It must contain at least one uppercase letter, one lowercase letter, and one number.");
    return;
}

// Confirm password match check
if (password !== cPassword) {
    alert("Passwords do not match.");
    return;
}

// Firebase user registration
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("User registered:", user);
        alert("Registration successful!");
        window.location.href = "index.html"; // Redirect to login page
    })
    .catch((error) => {
        console.error("Error registering user:", error.message);
        alert("Error: " + error.message);
    });
};

// Add event listener to form submission

let registerForm = document.getElementById("register-Form");
registerForm.addEventListener("submit", signUp);


