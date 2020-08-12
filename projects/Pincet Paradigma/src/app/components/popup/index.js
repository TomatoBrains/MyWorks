import $ from "jquery";

let popup = $(".main__popup");
let completePopup = $(".main__popup-complete");
let btn = $(".main__descr-btn--popup");
let btnComplete = $(".main__popup-submit");
let onlineBtn = $(".header__rec");
let background = $(".main__popup_background");
let closePopup = $(".main__popup-close");
let closeCompletePopup = $(".main__popup-complete_close");
let popupLeave = $(".popup__leave");
let popupLeaveClose = $(".popup__leave-close");
let exit = true;

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
    popupLeave.removeClass("show");
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
  popupLeaveClose.on("click", function () {
    closePopups();
  });
}
openClosePopup();

$("html").one("mouseleave", function () {
  popupLeave.addClass("show");
  background.addClass("show");
  $("html").addClass("overflowToggle");
});
