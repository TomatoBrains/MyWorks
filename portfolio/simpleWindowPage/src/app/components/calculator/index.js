import $ from "jquery";

let typeOfWindow = 1;
let heightOfWindow = 120;
let widthOfWindow = 120;
let criterion = 0;
let sashOfWindow = 1;
let total = 0;

$(".calculator__content--windows-type").on("click", function (event) {
  typeOfWindow = event.target.dataset.type;
});
$(".calculator__content--form-inputSize_width input").on("change", function () {
  widthOfWindow = $(this).val();
});
$(".calculator__content--form-inputSize_height input").on(
  "change",
  function () {
    heightOfWindow = $(this).val();
  }
);
$(document).ready(function () {
  $(".calculator-radioBtn").click(function () {
    var radioValue = $("input[name='inputRadio']:checked").val();
    criterion = radioValue;
  });
});

$(".calculator-select").on("change", function () {
  sashOfWindow = $(this).val();
});

$(".calculator__content--form_footer-inputSubmit button").on(
  "click",
  function () {
    if (
      $(".calculator__content--form_footer-inputTel input")
        .val()
        .match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){7,12}(\s*)?$/)
    ) {
      total =
        Number(typeOfWindow) +
        Number(heightOfWindow) +
        Number(widthOfWindow) +
        Number(criterion) +
        Number(sashOfWindow);
      $(".modal__window p").text(`Стоимость установки ${total} руб.`);
    }
  }
);
