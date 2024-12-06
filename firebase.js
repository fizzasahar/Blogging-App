  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCXmvvzoQIarg0Y3WUiGT7f0Z-gD3yqVnc",
    authDomain: "new-project-11cdf.firebaseapp.com",
    projectId: "new-project-11cdf",
    storageBucket: "new-project-11cdf.firebasestorage.app",
    messagingSenderId: "263562261706",
    appId: "1:263562261706:web:eb1e70c2215cf8bfdcf033",
    measurementId: "G-NYXFQ5YR9C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
export { auth,createUserWithEmailAndPassword,signInWithEmailAndPassword };




