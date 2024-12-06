import { auth,signInWithEmailAndPassword } from "./firebase.js";




// Function for user login
let signIn = (event) => {
  event.preventDefault(); // Prevent form from submitting the traditional way

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Check if email or password is empty
  if (!email || !password) {
    document.getElementById("error-message").innerText = "Please fill in both fields.";
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Login successful!");
      window.location.href = "index.html"; 
      
      // Redirect to homepage after login
    })
    .catch((error) => {
      console.error("Error signing in:", error.message);
      // Display error message below form
      document.getElementById("error-message").innerText = error.message;
    });
};

// Add event listener for form submission
let loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", signIn);
