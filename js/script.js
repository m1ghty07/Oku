"use strict";

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
var btn = document.querySelector(".burger"),
    list = document.querySelector(".header__nav-list");
btn.addEventListener("click", function () {
  btn.classList.toggle("active");
  list.classList.toggle("active");
  document.body.classList.toggle("lock");
});
var menuLinks = document.querySelectorAll(".header__nav-link, .footer__nav-link");
menuLinks.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    var href = this.getAttribute("href").substring(1);
    var scrollTarget = document.getElementById(href);
    var topOffset = 0;
    var elementPosition = scrollTarget.getBoundingClientRect().top;
    var offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});