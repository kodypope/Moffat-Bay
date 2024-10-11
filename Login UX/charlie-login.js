function togglePassword() {
    const passwordField = document.getElementById("password");
    const passwordToggle = document.querySelector(".password-toggle");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.textContent = "Hide";
    } else {
        passwordField.type = "password";
        passwordToggle.textContent = "Show";
    }
}
