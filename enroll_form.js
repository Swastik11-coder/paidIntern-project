let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let passwordEl = document.getElementById("password");
let passwordErrorMsgEl = document.getElementById("passwordErrMsg");

let numberEl = document.getElementById("number");
let numberErrorMsgEl = document.getElementById("numberErrMsg");

nameEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});
passwordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      passwordErrorMsgEl.textContent = "Required*";
    } else {
      passwordErrorMsgEl.textContent = "";
    }
  });
emailEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
});

numberEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
      numberErrorMsgEl.textContent = "Required*";
    } else {
      numberErrorMsgEl.textContent = "";
    }
  });
myFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
});