'use strict'

window.onload = function () {
  var navToggle = document.querySelector(".page-header__button");
  var userNav = document.querySelector(".user-nav");
  var mainNav = document.querySelector(".main-nav");


  navToggle.addEventListener("click", function() {
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
}
