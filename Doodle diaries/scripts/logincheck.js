if (sessionStorage.getItem("loggedIn") === "true") {
    alert("Signed in");
    // Continue with the rest of the script
}
else {
    alert("Not Signed in");
    window.location.href = "../pages/signin.html";
}
