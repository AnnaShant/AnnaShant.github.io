var link = document.querySelector(".footer_btn");
var popup = document.querySelector(".form");
var close = popup.querySelector(".close_btn");
var form = popup.querySelector("form");
var userName = popup.querySelector("[name='name_field']");
var userMail = popup.querySelector("[name='mail_field']");
var message = popup.querySelector("[name='message_field']");
var storageName = localStorage.getItem("userName");
var storageMail = localStorage.getItem("userMail");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("form_show");
  if (storageName) {
    userName.value = storageName;
    userMail.value = storageMail;
    message.focus();
  } else {
    userName.focus();
  }
});

close.addEventListener("click", function (event) {
  event.preventDefault();
  if (popup.classList.contains("form_show")) {
    popup.classList.remove("form_show");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("form_show")) {
      popup.classList.remove("form_show");
    }
  }
});
