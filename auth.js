
import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// SIGN UP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const message = document.getElementById("signupMessage");

        try {
            await createUserWithEmailAndPassword(auth, email, password);

            message.textContent = "Account created successfully!";
            window.location.href = "index.html";

        } catch (error) {
            message.textContent = error.message;
        }
    });
}

// LOGIN
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function(e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const message = document.getElementById("loginMessage");

        try {
            await signInWithEmailAndPassword(auth, email, password);

            message.textContent = "Login successful!";
            window.location.href = "index.html";

        } catch (error) {
            message.textContent = "Invalid email or password.";
        }
    });
}
