var mobMenu = document.querySelector('.menu-mobile__sub');
  var mobToggle = document.querySelector('.menu-mobile__sub-toggle');

  mobMenu.classList.remove('menu-mobile__sub--nojs');

  mobToggle.addEventListener('click', function() {
    if (mobMenu.classList.contains('menu-mobile__sub--closed')) {
      mobMenu.classList.remove('menu-mobile__sub--closed');
      mobMenu.classList.add('menu-mobile__sub--opened');
    } else {
      mobMenu.classList.add('menu-mobile__sub--closed');
      mobMenu.classList.remove('menu-mobile__sub--opened');
    }
  });

     var navStudents = document.querySelector('.menu-mobile__students');
  var studentsToggle = document.querySelector('.menu-mobile__students-toggle');

  navStudents.classList.remove('menu-mobile__students--nojs');

  studentsToggle.addEventListener('click', function() {
    if (navStudents.classList.contains('menu-mobile__students--closed')) {
      navStudents.classList.remove('menu-mobile__students--closed');
      navStudents.classList.add('menu-mobile__students--opened');
    } else {
      navStudents.classList.add('menu-mobile__students--closed');
      navStudents.classList.remove('menu-mobile__students--opened');
    }
  });

  var cognitivMenu = document.querySelector('.menu-mobile__cognitiv');
  var cognitivToggle = document.querySelector('.menu-mobile__cognitiv-toggle');

  cognitivMenu.classList.remove('menu-mobile__cognitiv--nojs');

  cognitivToggle.addEventListener('click', function() {
    if (cognitivMenu.classList.contains('menu-mobile__cognitiv--closed')) {
      cognitivMenu.classList.remove('menu-mobile__cognitiv--closed');
      cognitivMenu.classList.add('menu-mobile__cognitiv--opened');
    } else {
      cognitivMenu.classList.add('menu-mobile__cognitiv--closed');
      cognitivMenu.classList.remove('menu-mobile__cognitiv--opened');
    }
  });