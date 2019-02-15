var link = document.querySelector(".map__contacts-btn");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback__form-btn-close");
var overlay = document.querySelector(".feedback-overlay");

var feedback = popup.querySelector(".feedback__form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=textarea]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
    } catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.add("feedback-overlay__show");
  popup.classList.add("feedback__show");
  if (storage) {
    name.value = storage;
    email.focus();
    } else {
      name.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("feedback__show");
  popup.classList.remove("feedback__error");
  overlay.classList.remove("feedback-overlay__show");
});

feedback.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !textarea.value) {
    evt.preventDefault();
    popup.classList.remove("feedback__error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("feedback__error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault ();
    if (popup.classList.contains("feedback__show")) {
      popup.classList.remove("feedback__show");
      popup.classList.remove("feedback__error");
      overlay.classList.remove("feedback-overlay__show");
      }
    }
});