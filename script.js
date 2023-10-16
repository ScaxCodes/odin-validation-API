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
          errors[0].textContent = "Sir, please enter a valid E-Mail";
        }
        break;
      case "country":
        if (input.validity.valid) {
            errors[1].textContent = "";
          }
        else {
          errors[1].textContent = "Sir, please fill the country field";
        }
        break;
      case "zip-code":
        errors[2].textContent = checkZIP(input.value);
        break;  
      case "password":
        if (input.validity.valid) {
          errors[3].textContent = "";
        }
        else {
          errors[3].textContent = "Sir, please enter a password";
        }
        break;
      case "confirmation":
        if (input.validity.valid) {
          errors[4].textContent = "";
        }
        else {
          errors[4].textContent = "Sir, please enter a password confirmation";
        }
        break;
    }
  })
});

function checkZIP(str) {
  const constraints = "^(D-)?\\d{5}$";
  const regExp = /^(D-)?\d{5}$/;

  if (regExp.test(str)) {
    return "";
  }
  else {
    return "Sir, please enter a valid german ZIP-Code (D-XXXXX)"
  }

}




