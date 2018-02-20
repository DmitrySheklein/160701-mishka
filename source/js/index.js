'use strict'

document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.classList.remove("no-js");
  svg4everybody();
});

window.onload = function () {
  // Mobile menu
  var navToggle = document.querySelector(".page-header__button");
  var userNav = document.querySelector(".user-nav");
  var mainNav = document.querySelector(".main-nav");


  navToggle.addEventListener("click", function () {
    if (navToggle.classList.contains("page-header__button--closed")) {
      navToggle.classList.remove("page-header__button--closed");
      userNav.classList.remove("user-nav--active");
      mainNav.classList.remove("main-nav--active");
    } else {
      navToggle.classList.add("page-header__button--closed");
      userNav.classList.add("user-nav--active");
      mainNav.classList.add("main-nav--active");
    }
  });
  //Modal form
  var modal = document.querySelector('.modal-order');
  var orderBtn = document.querySelectorAll(".btn--order,.btn--add-cart");
  var modalBtnSubmit = modal.querySelector(".modal-order__add-button");

  for( var i = 0; i < orderBtn.length; i++) {
    orderBtn[i].addEventListener('click', function (event) {
      event.preventDefault()
      modal.classList.toggle('modal-order--active');
    })
  }

  modalBtnSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.toggle("modal-order--active");
  })

  //Map
    var map = document.querySelector("#map");
    if (map) {
      ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [56.317203, 43.987086],
            zoom: 18,
            controls: ['zoomControl']
          }, {
            searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Мы находимся здесь',
            balloonContent: 'ул. Большая Конюшенная, д. 19/8, офис 101'
          }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: ' img/icon-map-pin.svg',
            // Размеры метки.
            iconImageSize: [67, 100],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-33, -80]
          });
        myMap.behaviors.disable(['scrollZoom', 'rightMouseButtonMagnifier']);
        myMap.geoObjects
          .add(myPlacemark);
      });
    }
}
