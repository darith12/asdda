
$(document).ready(
  function () {
    $(`#signup-btn`).click(
      function () {
        var username = $("input").eq(0).val();
        var password = $("input").eq(0).val();
        var confirmpassword = $("input").eq(0).val();

        if (username == "" || password == "" || confirmpassword == "") {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Please Fill Information",
            showConfirmButton: false,
            timer: 1500
          });
        }else if(confirmpassword==password){
          Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Account Created Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
        else {
          Swal.fire({
            position: "center-center",
            icon: "error",
            title: "Passoword is not match",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    )
  }
)
