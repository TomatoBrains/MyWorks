//dep price tabs
$(function () {
	var tab = $(".types__tabs > div");
	tab.hide().filter(":first").fadeIn(800, "linear");
	$(".types__tabBtns a")
		.click(function () {
			tab.hide();
			tab.filter($(this).data("id")).fadeIn(800, "linear");
			$(".types__tabBtns a").removeClass("active");
			$(".types__tabBtns a").removeClass("tab-target");
			$(this).addClass("active");
			$(this).addClass("tab-target");
			return false;
		})
		.filter(":first")
		.click();
});

$(function () {
	let tab = $(".types__tabs > div");
	let tabBtn = $('.types__tabBtns a');
	tab.hide().filter(":first").fadeIn(800, "linear");
	$(".slider__pagin span").on('click', (function () {
		tab.hide();
		tab.filter($(this).data("id")).fadeIn(800, "linear");
		tabBtn.removeClass('tab-target');
		tabBtn.filter($(this).data('tab')).addClass('tab-target');
		return false;
	}))
		.filter(":first")
});