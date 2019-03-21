"use strict"

//Скрипт для блока со сменой языка

var navMain = document.querySelector(".menu__flag");
var navToggle = document.querySelector(".menu__flag-items");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("menu__flag--closed")) {
    navMain.classList.remove("menu__flag--closed");
    navMain.classList.add("menu__flag--opened");
  } else {
    navMain.classList.add("menu__flag--closed");
    navMain.classList.remove("menu__flag--opened");
  }
});

//Большой слайдер со свайпом
$(".bus-destination__slider").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button class="bus-destination__arrow-prev" type="button"></button>',
	nextArrow: '<button class="bus-destination__arrow-next" type="button"></button>',
  responsive: [
    {
    breakpoint: 1366,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});

//Табы

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("choice-transport__tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("choice-transport__tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();


//Окно с формой

var modal = document.getElementById("myModal");
var myBtn = document.getElementsByClassName("btn__modal-cost");
var close = document.getElementsByClassName("modal-cost__close")[0];

for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener("click", function() {
    openModalWindow();
  });
}

close.addEventListener("click", function() {
  closeModalWindow();
});

function openModalWindow() {
  modal.style.display = "block";
}

function closeModalWindow() {
  modal.style.display = "none";
}


//Окно подтверждения

var popup = document.querySelector(".modal-payment");
var link = document.querySelector(".btn__form-payment");
var btnClose = popup.querySelector(".modal-payment__close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-payment__show");
});

btnClose.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-payment__show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-payment__show")) {
      popup.classList.remove("modal-payment__show");
    }
  }
});
