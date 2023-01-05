// Show/Hide password input button

const showHidePwdBtn = document.getElementById("showHidePwdBtn");
const passwordField = document.getElementById("form-input-APIServiceAccountPW");

showHidePwdBtn.onclick = function () {
  if (passwordField.type == "password") {
    passwordField.type = "text";
  } else if (passwordField.type == "text") {
    passwordField.type = "password";
  }
};

// Submit button - handles processing and storage of form data

const formSubmitBtn = document.getElementById("form-submit-btn");
const exampleForm = document.getElementById("example-form");

formSubmitBtn.addEventListener("click", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  // Retrieve data from the form
  const data = new FormData(exampleForm);
  let formJSON = Object.fromEntries(data.entries());
  console.log(formJSON);

  // Do something with formJSON
}
