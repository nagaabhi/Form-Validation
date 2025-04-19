const displayEmailErr = document.querySelector(".js-display-email-err");
const displayPasswordErr = document.querySelector(".js-display-password-err");
const submitFormButton = document.querySelector(".js-submit-button");

function validateUserForm() {
  const inputEmail = document.querySelector(".js-input-email");
  const inputPassword = document.querySelector(".js-input-password");

  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;

  let isValidForm = true;
  if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    inputEmail.style.borderColor = "red";
    displayEmailErr.innerHTML = "Invalid Email Entered...";
    displayEmailErr.style.color = "red";
    isValidForm = false;
  }

  if (!passwordValue || passwordValue.length < 6) {
    inputPassword.style.borderColor = "red";
    displayPasswordErr.innerHTML = "Password should of 6 or more charcters...";
    displayPasswordErr.style.color = "red";
    isValidForm = false;
  }

  if (isValidForm) {
    alert("Form submitted successfuly...");
  }
}
submitFormButton.addEventListener("click", () => {
  validateUserForm();
});
