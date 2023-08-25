const inputName = document.getElementById("user-name");
const inputEmail = document.getElementById("user-email");
const errorNameIcon = document.querySelector(".name-error-icon");
const errorEmailIcon = document.querySelector(".email-error-icon");


inputName.addEventListener("change", function() {
  if (!this.checkValidity()) {
    errorNameIcon.style.display = "block";
    this.classList.add("name-error");
  } else {
    errorNameIcon.style.display = "none";
    this.classList.remove("name-error");
  }
});

inputEmail.addEventListener("input", function() {
  if (!this.checkValidity()) {
    errorEmailIcon.style.display = "block";
  } else {
    errorEmailIcon.style.display = "none";
  }
});