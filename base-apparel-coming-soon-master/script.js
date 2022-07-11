const form = document.getElementById("form");
const emailVal = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value;

  if(!validateEmail(emailVal)) {
    form.classList.add('error')
  } else {
    form.classList.remove('error')
  }
});

function validateEmail(email) {
  var res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase())
}
