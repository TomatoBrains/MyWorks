import $ from "jquery";

let popup = $(".main__popup");
let completePopup = $(".main__popup-complete");
let btn = $(".main__descr-btn");
let btnComplete = $(".main__popup-submit");
let onlineBtn = $(".header__rec");
let background = $(".main__popup_background");
let closePopup = $(".main__popup-close");
let closeCompletePopup = $(".main__popup-complete_close");

function openClosePopup() {
  function togglePopup() {
    popup.toggleClass("show");
    $("html").toggleClass("overflowToggle");
    background.toggleClass("show");
  }
  function toggleCompletePopup() {
    completePopup.toggleClass("show");
    popup.toggleClass("show");
  }
  function closePopups() {
    popup.removeClass("show");
    completePopup.removeClass("show");
    background.removeClass("show");
    $("html").toggleClass("overflowToggle");
  }
  btn.on("click", function () {
    togglePopup();
  });
  onlineBtn.on("click", function () {
    togglePopup();
  });
  btnComplete.on("click", function () {
    toggleCompletePopup();
  });
  background.on("click", function () {
    closePopups();
  });
  closePopup.on("click", function () {
    closePopups();
  });
  closeCompletePopup.on("click", function () {
    closePopups();
  });
}
openClosePopup();
