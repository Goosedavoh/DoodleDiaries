function uploadInput() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("inputpassword").value;

    if (username === "admin" && password === "password") {
        sessionStorage.setItem("loggedIn", "true"); // Set login flag
        window.location.href = "../pages/content.html"; // Redirect to new HTML file
    } else {
        alert("login failed: incorrect username or password");
    }
}
