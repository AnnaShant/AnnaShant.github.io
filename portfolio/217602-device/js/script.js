"use strict"

var navMain = document.querySelector(".main-nav__sub-items");
var navToggle = document.querySelector(".main-nav__item-catalog-toggle");

navMain.classList.remove("main-nav__sub-items--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav__sub-items--closed")) {
    navMain.classList.remove("main-nav__sub-items--closed");
    navMain.classList.add("main-nav__sub-items--opened");
  } else {
    navMain.classList.add("main-nav__sub-items--closed");
    navMain.classList.remove("main-nav__sub-items--opened");
  }
});


var link = document.querySelector(".contacts__btn");

var popup = document.querySelector(".modal__writetous");
var close = popup.querySelector(".modal__writetous-btn");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal__show-writetous");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal__show-writetous");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__show-writetous")) {
      popup.classList.remove("modal__show-writetous");
    }
  }
});

var mapOpen = document.querySelector(".contacts__map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-map__btn");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal__show-map");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal__show-map");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal__show-map")) {
      mapPopup.classList.remove("modal__show-map");
    }
  }
});

//Табы
function openCity(evt, cityName) {
// Declare all variables
var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("slider-info__tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("slider-info__tablinks");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the link that opened the tab
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


var slider = (function (config) {

  const ClassName = {
    INDICATOR_ACTIVE: 'slider__indicator_active',
    ITEM: 'slider__item',
    ITEM_LEFT: 'slider__item_left',
    ITEM_RIGHT: 'slider__item_right',
    ITEM_PREV: 'slider__item_prev',
    ITEM_NEXT: 'slider__item_next',
    ITEM_ACTIVE: 'slider__item_active'
  }

  var
    _isSliding = false, // индикация процесса смены слайда
    _interval = 0, // числовой идентификатор таймера
    _transitionDuration = 700, // длительность перехода
    _slider = {}, // DOM элемент слайдера
    _items = {}, // .slider-item (массив слайдов)
    _sliderIndicators = {}, // [data-slide-to] (индикаторы)
    _config = {
      selector: '', // селектор слайдера
      isCycling: true, // автоматическая смена слайдов
      direction: 'next', // направление смены слайдов
      interval: 5000, // интервал между автоматической сменой слайдов
      pause: true // устанавливать ли паузу при поднесении курсора к слайдеру
    };

  var
    // функция для получения порядкового индекса элемента
    _getItemIndex = function (_currentItem) {
      var result;
      _items.forEach(function (item, index) {
        if (item === _currentItem) {
          result = index;
        }
      });
      return result;
    },
    // функция для подсветки активного индикатора
    _setActiveIndicator = function (_activeIndex, _targetIndex) {
      if (_sliderIndicators.length !== _items.length) {
        return;
      }
      _sliderIndicators[_activeIndex].classList.remove(ClassName.INDICATOR_ACTIVE);
      _sliderIndicators[_targetIndex].classList.add(ClassName.INDICATOR_ACTIVE);
    },

    // функция для смены слайда
    _slide = function (direction, activeItemIndex, targetItemIndex) {
      var
        directionalClassName = ClassName.ITEM_RIGHT,
        orderClassName = ClassName.ITEM_PREV,
        activeItem = _items[activeItemIndex], // текущий элемент
        targetItem = _items[targetItemIndex]; // следующий элемент

      var _slideEndTransition = function () {
        activeItem.classList.remove(ClassName.ITEM_ACTIVE);
        activeItem.classList.remove(directionalClassName);
        targetItem.classList.remove(orderClassName);
        targetItem.classList.remove(directionalClassName);
        targetItem.classList.add(ClassName.ITEM_ACTIVE);
        window.setTimeout(function () {
          if (_config.isCycling) {
            clearInterval(_interval);
            _cycle();
          }
          _isSliding = false;
          activeItem.removeEventListener('transitionend', _slideEndTransition);
        }, _transitionDuration);
      };

      if (_isSliding) {
        return; // завершаем выполнение функции если идёт процесс смены слайда
      }
      _isSliding = true; // устанавливаем переменной значение true (идёт процесс смены слайда)

      if (direction === "next") { // устанавливаем значение классов в зависимости от направления
        directionalClassName = ClassName.ITEM_LEFT;
        orderClassName = ClassName.ITEM_NEXT;
      }

      targetItem.classList.add(orderClassName); // устанавливаем положение элемента перед трансформацией
      _setActiveIndicator(activeItemIndex, targetItemIndex); // устанавливаем активный индикатор

      window.setTimeout(function () { // запускаем трансформацию
        targetItem.classList.add(directionalClassName);
        activeItem.classList.add(directionalClassName);
        activeItem.addEventListener('transitionend', _slideEndTransition);
      }, 0);

    },
    // функция для перехода к предыдущему или следующему слайду
    _slideTo = function (direction) {
      var
        activeItem = _slider.querySelector('.' + ClassName.ITEM_ACTIVE), // текущий элемент
        activeItemIndex = _getItemIndex(activeItem), // индекс текущего элемента
        lastItemIndex = _items.length - 1, // индекс последнего элемента
        targetItemIndex = activeItemIndex === 0 ? lastItemIndex : activeItemIndex - 1;
      if (direction === "next") { // определяем индекс следующего слайда в зависимости от направления
        targetItemIndex = activeItemIndex == lastItemIndex ? 0 : activeItemIndex + 1;
      }
      _slide(direction, activeItemIndex, targetItemIndex);
    },
    // функция для запуска автоматической смены слайдов в указанном направлении
    _cycle = function () {
      if (_config.isCycling) {
        _interval = window.setInterval(function () {
          _slideTo(_config.direction);
        }, _config.interval);
      }
    },
    // обработка события click
    _actionClick = function (e) {
      var
        activeItem = _slider.querySelector('.' + ClassName.ITEM_ACTIVE), // текущий элемент
        activeItemIndex = _getItemIndex(activeItem), // индекс текущего элемента
        targetItemIndex = e.target.getAttribute('data-slide-to');

      if (!(e.target.hasAttribute('data-slide-to') || e.target.classList.contains('slider__control'))) {
        return; // завершаем если клик пришёлся на не соответствующие элементы
      }
      if (e.target.hasAttribute('data-slide-to')) {// осуществляем переход на указанный сдайд
        if (activeItemIndex === targetItemIndex) {
          return;
        }
        _slide((targetItemIndex > activeItemIndex) ? 'next' : 'prev', activeItemIndex, targetItemIndex);
      } else {
        e.preventDefault();
        _slideTo(e.target.classList.contains('slider__control_next') ? 'next' : 'prev');
      }
    },
    // установка обработчиков событий
    _setupListeners = function () {
      // добавление к слайдеру обработчика события click
      _slider.addEventListener('click', _actionClick);
      // остановка автоматической смены слайдов (при нахождении курсора над слайдером)
      if (_config.pause && _config.isCycling) {
        _slider.addEventListener('mouseenter', function (e) {
          clearInterval(_interval);
        });
        _slider.addEventListener('mouseleave', function (e) {
          clearInterval(_interval);
          _cycle();
        });
      }
    };

  // init (инициализация слайдера)
  for (var key in config) {
    if (key in _config) {
      _config[key] = config[key];
    }
  }
  _slider = (typeof _config.selector === 'string' ? document.querySelector(_config.selector) : _config.selector);
  _items = _slider.querySelectorAll('.' + ClassName.ITEM);
  _sliderIndicators = _slider.querySelectorAll('[data-slide-to]');
  // запуск функции cycle
  _cycle();
  _setupListeners();

  return {
    next: function () { // метод next
      _slideTo('next');
    },
    prev: function () { // метод prev
      _slideTo('prev');
    },
    stop: function () { // метод stop
      clearInterval(_interval);
    },
    cycle: function () { // метод cycle
      clearInterval(_interval);
      _cycle();
    }
  }
  }({
  selector: '.slider',
  isCycling: true,
  direction: 'next',
  interval: 5000,
  pause: true
  }));
