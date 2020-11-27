import $ from "jquery";
$(".catalogBtn").on("click", function () {
  $(".form-popupMainBtn").fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});
$(".form-popupMainBtn-close").on("click", function () {
  $(".form-popupMainBtn").fadeOut();
  $(".popup-background").fadeOut();
  $("html").removeClass("overflowHidden");
});
$(".order").on("click", function () {
  $(".form-popup").fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});
$(".popup-background").on("click", function () {
  $(".form-popup").fadeOut();
  $(".popup-background").fadeOut();
  $(".form-popupMainBtn").fadeOut();
  $(".more").fadeOut();
  $(".popup-terms").fadeOut();
  $("html").removeClass("overflowHidden");
  $(".endForm").fadeOut();
});
$(".form-close").on("click", function () {
  $(".form-popup").fadeOut();
  $(".popup-background").fadeOut();
  $("html").removeClass("overflowHidden");
});

$(".terms").on("click", function () {
  $(".popup-terms").fadeIn();
  $(".popup-background").fadeIn();
  $(".more").fadeOut();
  $(".form-popup").fadeOut();
  $("html").addClass("overflowHidden");
});
$(".terms-close").on("click", function () {
  $(".popup-terms").fadeOut();
  $(".popup-background").fadeOut();
  $("html").removeClass("overflowHidden");
});
/* $("form").on("submit", function (e) {
	//$('.popup-background').fadeIn();
	$('.popup-background').fadeIn();
	$('.endForm').fadeIn();
	$("html").addClass("overflowHidden");
	$('.form-popup').fadeOut();
	$('.form-popupMainBtn').fadeOut();
}); */
$(".endForm-close").on("click", function () {
  $(".endForm").fadeOut();
  $(".popup-background").fadeOut();
  $("html").removeClass("overflowHidden");
});

$(".more-close").on("click", function () {
  $(".more").fadeOut();
  $(".popup-background").fadeOut();
  $("html").removeClass("overflowHidden");
});

let more = $(".more");
$(".more-btn").on("click", function () {
  more.filter($(this).data("more")).fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});
