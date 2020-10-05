import $ from 'jquery';
$(".order").on('click', function () {
	$('.form-popup').fadeIn();
	$('.popup-background').fadeIn();
	$('html').addClass('overflowHidden');
});
$(".popup-background").on('click', function () {
	$('.form-popup').fadeOut();
	$('.popup-background').fadeOut();
	$('.more').fadeOut();
	$('.popup-terms').fadeOut();
	$('html').removeClass('overflowHidden');
	$('.endForm').fadeOut();
});
$(".form-close").on('click', function () {
	$('.form-popup').fadeOut();
	$('.popup-background').fadeOut();
	$('html').removeClass('overflowHidden');
});
$(".more-btn").on('click', function () {
	$('.more').fadeIn();
	$('.popup-background').fadeIn();
	$('html').addClass('overflowHidden');
});
$(".more-close").on('click', function () {
	$('.more').fadeOut();
	$('.popup-background').fadeOut();
	$('html').removeClass('overflowHidden');
});
$('.terms').on('click', function () {
	$('.popup-terms').fadeIn();
	$('.popup-background').fadeIn();
	$('.more').fadeOut();
	$('.form-popup').fadeOut();
	$('html').addClass('overflowHidden');
})
$(".terms-close").on('click', function () {
	$('.popup-terms').fadeOut();
	$('.popup-background').fadeOut();
	$('html').removeClass('overflowHidden');
});
$("form").on("submit", function (e) {
	//$('.popup-background').fadeIn();
	$('.popup-background').fadeIn();
	$('.endForm').fadeIn();
	$("html").addClass("overflowHidden");
});
$('.endForm-close').on('click', function () {
	$('.endForm').fadeOut();
	$('.popup-background').fadeOut();
	$('html').removeClass('overflowHidden');
});