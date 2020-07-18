import $ from "jquery";

window.mask = require("jquery.maskedinput/src/jquery.maskedinput.js");

$(function ($) {
  $("#inputTel").mask("+375 99 999 99 99", {
    placeholder: "+375 -- --- -- -- ",
  });
});
