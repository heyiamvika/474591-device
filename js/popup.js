var linkForm = document.querySelector(".popup-button");
var popupForm = document.querySelector(".modal-form");
var close = document.querySelector(".button-close");
var userName = popupForm.querySelector("[name=user-name]");
var userEmail = popupForm.querySelector("[name=user-email]");
// var storage = localStorage.getItem("userName", "userEmail");

var linkMap = document.querySelector(".popup-map");
var popupMap = document.querySelector(".modal-map");

// Modal Form

linkForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupForm.classList.add("modal-show");
  userName.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupForm.classList.contains("modal-show")) {
      popupForm.classList.remove("modal-show");
    }
  }
});

// Form animation

// Modal Map

linkMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
    }
  }
});