var accountDetails = document.getElementById("usernameDiv");

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    // do something
  } else {
    accountDetails.innerHTML = "";
    window.location.replace("login-page.html");
  }
});
