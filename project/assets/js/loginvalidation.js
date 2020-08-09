const username = document.getElementById("username");
const password = document.getElementById("password");
const form = document.getElementById("login");
const errorElement = document.getElementById("error");

$(document).ready(function () {
  $("#login").on("submit", function (e) {
    e.preventDefault();
    let messages = [];
    if (username.value === "" || username.value == null) {
      alert("Username is required");
    }

    if (password.value === "" || password.value == null) {
      alert("Password is required");
    }

    if (password.value.length >> 0 && password.value.length <= 4) {
      alert("Password is invalid");
    }

    if (password.value.length >= 15) {
      alert("Password must be less than 15 characters");
    }

    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = alert(",  ");
    }
  });
});

// (function () {
//   "use strict";
//   window.addEventListener(
//     "load",
//     function () {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       var forms = document.getElementsByClassName("needs-validation");
//       // Loop over them and prevent submission
//       var validation = Array.prototype.filter.call(forms, function (form) {
//         form.addEventListener(
//           "submit",
//           function (event) {
//             if (form.checkValidity() === false) {
//               event.preventDefault();
//               event.stopPropagation();
//             }
//             form.classList.add("was-validated");
//           },
//           false
//         );
//       });
//     },
//     false
//   );
// })();
