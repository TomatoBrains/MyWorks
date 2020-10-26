import $ from "jquery";

function toggleModal() {
  function openCloseModal() {
    $(".modal").toggleClass("show");
    $("html").toggleClass("overflowToggle");
  }

  $(".awesome__form--submit").on("click", function () {
    if (
      $(".awesome--tel-input")
        .val()
        .match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,12}(\s*)?$/)
    ) {
      openCloseModal();
    }
  });

  $(".calculator__content--form_footer-inputSubmit button").on(
    "click",
    function () {
      if (
        $(".calculator__content--form_footer-inputTel input")
          .val()
          .match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,12}(\s*)?$/)
      ) {
        openCloseModal();
      }
    }
  );

  $(".modal__window--close *").on("click", openCloseModal);

  $(".modal-back").on("click", openCloseModal);
}

toggleModal();

function customValidationError() {
  this.setCustomValidity("");
  if (this.validity.patternMismatch) {
    this.setCustomValidity("Введите номер телефона от 7 до 12 цифр");
  }
}

$(".awesome--tel-input").on("input invalid", customValidationError);

$(".calculator__content--form_footer-inputTel input").on(
  "input invalid",
  customValidationError
);
