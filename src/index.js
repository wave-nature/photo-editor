// Attach click event to the Google login button
import { signInWithGoogle } from "./auth";

const googleLoginButton = document.getElementById("google-login-button");
googleLoginButton.addEventListener("click", function () {
  // Sign in with Google when the button is clicked
  signInWithGoogle();
});
