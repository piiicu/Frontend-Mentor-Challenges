const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value.trim();
  const lastName = form["lastname"].value.trim();
  const email = form["email"].value.trim();
  const password = form["password"].value.trim();

  if (firstName === "") {
    setError("firstname", "First Name cannot be empty");
  } else {
    removeError("firstname");
  }

  if (lastName === "") {
    setError("lastname", "Last Name cannot be empty");
  } else {
    removeError("lastname");
  }

  if (email === "") {
    setError("email", "Email cannot be empty");
  } else if (!validateEmail(email)) {
    setError("email", "Looks like this is not an email");
  } else {
    removeError("email");
  }

  if (password === "") {
    setError("password", "Password cannot be empty")
  } else {
    removeError("password");
  }

});

function setError(element, message) {
  const formControl = form[element].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerText = message;
}

function removeError(element) {
  const formControl = form[element].parentNode;
  formControl.classList.remove("error");
}

function validateEmail(email) {
  var res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}
