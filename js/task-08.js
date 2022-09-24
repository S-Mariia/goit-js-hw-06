const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value !== "" && password.value !== "") {
    const response = {
      email: email.value,
      password: password.value,
    };

    console.log(response);
    event.currentTarget.reset();
  } else alert("Please fill in all fields");
}

