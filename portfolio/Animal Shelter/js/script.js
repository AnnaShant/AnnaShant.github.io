"use strict"

var link = document.querySelector(".btn-modal");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__btn");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

var link2 = document.querySelector(".btn-modal-2");
var popup2 = document.querySelector(".modal-2");
var close2 = popup2.querySelector(".modal__btn");

link2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.add("modal-show");
});

close2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.remove("modal-show");
});

  window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup2.classList.contains("modal-show")) {
      popup2.classList.remove("modal-show");
    }
  }
});
