"use strict";

// burger bar

let navUl = document.querySelector(".nav-ul");
let burger = document.querySelector(".burger-div");

burger.addEventListener("click", function () {
  navUl.classList.toggle("active-ul");
  burger.classList.toggle("active-bar");
});

// header search icon
let searchInput = document.querySelector(".search-input");
let headerSearchIcon = document.querySelector(".search-icon");

headerSearchIcon.addEventListener("click", function () {
  searchInput.classList.toggle("active-search-input");
});

// header scroll (change color)
let header = document.querySelector(".full-header");

window.onscroll = function () {
  let top = window.scrollY;
  //   console.log(top);
  if (top >= 80) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

//  start Accordion
let accordionDivs = document.querySelectorAll(".accordion-div");
let accordionIcon = document.querySelectorAll(".accordion-icon");

accordionDivs.forEach((element) => {
  element.addEventListener("click", function () {
    this.classList.toggle("active-accordion-div");

    accordionIcon.forEach((icon) => {
      if (element.classList.contains("active-accordion-div")) {
        icon.classList.remove("fa-angle-up");
        icon.classList.add("fa-angle-down");
      } else {
        icon.classList.add("fa-angle-up");
        icon.classList.remove("fa-angle-down");
      }
    });
  });
});
