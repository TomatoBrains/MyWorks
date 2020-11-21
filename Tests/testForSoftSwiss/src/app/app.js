import "./app.scss";

// import $ from 'jquery'

// window.jQuery = $;
let mobMenu = document.querySelector(".header__menu-mob");
let closeMenu = document.querySelector(".header__menu-close");
let openMenu = document.querySelector(".header__menu-btn");
function menuMobile() {
  openMenu.addEventListener("click", (e) => {
    mobMenu.classList.add("show");
  });
  closeMenu.addEventListener("click", (e) => {
    mobMenu.classList.remove("show");
  });
}
menuMobile();
