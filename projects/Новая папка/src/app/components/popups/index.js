import $ from "jquery";
$(".order").on("click", function (e) {
  e.preventDefault;
  $(".popupForm").fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});
$(".politic-btn").on("click", function () {
  $(".politic").fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});

$(".popup-background").on("click", function () {
  $(".popupForm").fadeOut();
  $(".popup-background").fadeOut();
  $(".politic").fadeOut();
  $(".popupTy").fadeOut();
  $(".popupPop").fadeOut();
  $(".popupSty").fadeOut();
  $("html").removeClass("overflowHidden");
});
$(".close").on("click", function () {
  $(".popupForm").fadeOut();
  $(".popup-background").fadeOut();
  $(".politic").fadeOut();
  $(".popupTy").fadeOut();
  $(".popupPop").fadeOut();
  $(".popupSty").fadeOut();
  $("html").removeClass("overflowHidden");
});

$("form").on("submit", function (e) {
  $(".popup-background").fadeIn();
  $(".popupTy").fadeIn();
  $("html").addClass("overflowHidden");
  $(".popupForm").fadeOut();
  $(".popupSty").fadeOut();
  $(".popupPop").fadeOut();
});

let moreSty = $(".popupSty");
$(".styles__cards-item").on("click", function () {
  moreSty.filter($(this).data("style")).fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});
let morePop = $(".popupPop");
$(".popBtn").on("click", function () {
  morePop.filter($(this).data("pop")).fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});
