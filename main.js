"use strict";
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height; //세로길이
const homeContactButton = document.querySelector(".home__contact");
const navbarMenu = document.querySelector(".navbar__menu");
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
const arrowup = document.querySelector(".Arrow__up ");
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
//navbar

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//navbar toggle

navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

//handle scroll

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

navbar.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link === undefined) {
    return;
  }
  scrollIntoView(link);
});

homeContactButton.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});
/*home opacity */

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight; // 위로올라가면 1 밑으로 내려가면 0
});

/* show arrow up */
arrowup.addEventListener("click", (event) => {
  scrollIntoView("#home");
});

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    //높이의 반정도내려왔을대
    arrowup.classList.add("visible");
  } else {
    arrowup.classList.remove("visible");
  }
});
