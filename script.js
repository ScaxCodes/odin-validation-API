const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const errors = form.querySelectorAll(".error");

inputs.forEach((input) => {
  input.addEventListener("focusout", (e) => {
    input.classList.add("interacted");
    switch (input.name) {
      case "mail":
        if (input.validity.valid) {
          errors[0].textContent = "";
        } else {
          errors[0].textContent = "Sir, please enter a valid E-Mail";
        }
        break;
      case "country":
        if (input.validity.valid) {
          errors[1].textContent = "";
        } else {
          errors[1].textContent = "Sir, please fill the country field";
        }
        break;
      case "zip-code":
        errors[2].textContent = checkZIP(input.value);
        break;
      case "password":
        if (input.validity.valid) {
          errors[3].textContent = "";
        } else {
          errors[3].textContent = "Sir, please enter a password";
        }
        break;
      case "confirmation":
        if (input.value == inputs[3].value) {
          errors[4].textContent = "";
          input.setCustomValidity("");
        } else {
          errors[4].textContent = "Sir, the password does not match!";
          input.setCustomValidity("NOPE!");
        }
        break;
    }
  });
});

function checkZIP(str) {
  const regExp = /^(D-)?\d{5}$/;

  if (regExp.test(str)) {
    inputs[2].setCustomValidity("");
    return "";
  } else {
    inputs[2].setCustomValidity("NOPE!");
    return "Sir, please enter a valid german ZIP-Code (D-XXXXX)";
  }
}

form.addEventListener("submit", () => {
  const box = document.querySelector(".box");
  box.style.opacity = 1;
  if (form.checkValidity()) {
    box.style.backgroundColor = "green";
    box.textContent = "HIGH FIVE!";
  } else {
    box.style.backgroundColor = "red";
    box.textContent = "FAIL!";
  }
});
