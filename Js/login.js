$(document).ready(function () {
    $("#login-btn").click(function () {
      var username = $("#username-txt").val();
      var password = $("#password-txt").val();
  
      console.log("Button clicked"); // Debugging step
      console.log("Username: " + username); // Debugging step
      console.log("Password: " + password); // Debugging step
  
      if (username === "User" && password === "1234") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Signing In",
          showConfirmButton: false,
          timer: 2000
        }).then(function() {
          console.log("Redirecting to View/Main.html"); // Debugging step
          window.location.href = "View/Main.html";
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Incorrect Username or Password",
          showConfirmButton: false,
          timer: 2000
        });
      }
    });
  });
  