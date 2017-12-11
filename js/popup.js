var linkForm = document.querySelector(".popup-button");
var form = document.querySelector(".modal-form");
var close = document.querySelector(".button-close")

linkForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.remove("modal-show");
});