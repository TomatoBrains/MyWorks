import $ from "jquery";

window.mask = require("jquery.maskedinput/src/jquery.maskedinput.js");

$(function ($) {
  $(".inputTel").mask("+7 (999) 999-99-99", {
    placeholder: "+7 (---) ---------",
  });
});
