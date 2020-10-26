$('.header__menu-btn').on('click', function () {
	$('.header__menu-mobile').fadeIn().css("display", "flex");
	$('html').addClass('overflowHidden');
})
$('.header__menu-mob a').on('click', function () {
	$('.header__menu-mobile').fadeOut()
	$('html').removeClass('overflowHidden');
})
$('.header__menu-close').on('click', function () {
	$('.header__menu-mobile').fadeOut()
	$('html').removeClass('overflowHidden');
})