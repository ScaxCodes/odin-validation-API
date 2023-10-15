const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const errors = form.querySelectorAll(".error");

inputs.forEach(input => {
  input.addEventListener("input", (e) => {
    switch (input.name) {
      case "mail":
        if (input.validity.valid) {
          errors[0].textContent = "";
        }
        else {
          errors[0].textContent = "GIB EMAIL, SIR!";
        }
        break;
      case "country":
        break;
      case "zip-code":
        break;
      case "password":
        break;
      case "confirmation":
        break;
    }
  })
});




