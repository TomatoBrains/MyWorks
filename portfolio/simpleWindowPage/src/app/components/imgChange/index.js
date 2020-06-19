import $, { each } from "jquery";

$(".calculator__content--windows-type").on("click", function (event) {
  let e = event.target.dataset.src;
  $(".calculator__changeImg").attr("src", e);
});
