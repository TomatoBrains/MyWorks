import $ from "jquery";

let popup = $(".card__popup");
let completePopup = $(".main__popup-complete");
let btn = $(".main__descr-btn--popup");
let btnComplete = $(".main__popup-submit");
let background = $(".main__popup_background");
let closePopup = $(".main__popup-close");
let closeCompletePopup = $(".main__popup-complete_close");
let popupLeave = $(".popup__leave--wraper");
let popupLeaveClose = $(".popup__leave-close");
let popupName = $(".main__popup-name input");
let popupPhone = $(".main__popup-tel input");
let formName = $(".request__form-name input");
let formTel = $(".request__form-tel input");
let presentBtn = $(".presentBtn");
let presentBtnOnline = $(".presentBtnOnline");
let formNameOnline = $(".online__form-name input");
let formTelOnline = $(".online__form-tel input");

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
  btnComplete.on("click", function () {
    if (popupName.val().length > 0 && popupPhone.val().length > 0) {
      toggleCompletePopup();
    }
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

$(document).one("mouseleave", function (e) {
  if (e.clientY < 0) {
    popupLeave.addClass("show");
    background.addClass("show");
    $("html").addClass("overflowToggle");
  }
});
/*$("form").on("submit", function () {
  popupLeave.addClass("show");
  background.addClass("show");
  $("html").addClass("overflowToggle");
});*/
