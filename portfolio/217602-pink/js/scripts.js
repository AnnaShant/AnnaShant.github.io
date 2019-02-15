"use strict"

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var link = document.querySelector(".user-form__btn");

var popup = document.querySelector(".user-form__sending");
var close = popup.querySelector(".user-form__sending-btn");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal__show-sending");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal__show-sending");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__show-sending")) {
      popup.classList.remove("modal__show-sending");
    }
  }
});
