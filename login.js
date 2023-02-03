const loginform = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.username.value;
    const password = loginForm.password.value;

    if (email === "user" && password === "dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        alert("Error")
        
    }
})