/* 
$(window).on("scroll",
	function () {
		$('.header').addClass('header-back')
	}
) */
$(window).scroll(function () {
	if ($(window).innerWidth() > 992) {
		if ($(window).scrollTop() != 0) {
			$('.header').addClass('header-back')
		}
		else {
			$('.header').removeClass('header-back')
		}
	}
	else {
		return
	}
});
