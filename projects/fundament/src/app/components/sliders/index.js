import $ from 'jquery';
import "slick-carousel";

// reviews sldier 
var $status2 = $(".reviews__slider-pagination");
var $slickElement2 = $(".reviews__slider-main");

$slickElement2.on("init reInit afterChange", function (
	event,
	slick,
	currentSlide,
	nextSlide
) {
	var i = (currentSlide ? currentSlide : 0) + 1;
	$status2.html(
		`<span class="txt50  blue exBold">0${i}
	  </span> <span class="grey Bold txt24"> / ${slick.slideCount}</span>`
	);
});
$('.reviews__slider-main').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	nextArrow: $(".reviews__slider-arrowR"),
	prevArrow: $(".reviews__slider-arrowL"),
	lazyLoad: "progressive",
	//autoplay: true,
	autoplaySpeed: 4000,
	centerMode: true,
	centerPadding: '20%',
	variableWidth: true,
	//infinite: false,
	responsive: [{
		breakpoint: 993,
		settings: {
			slidesToShow: 1,
			centerMode: false,
			centerPadding: '0%',
			variableWidth: false,
			dots: true,
			arrows: false,
		},
	},
	],
});
//partners slider
$('.partners__slider-1').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	nextArrow: $(".partners__slider-arrowR-1"),
	prevArrow: $(".partners__slider-arrowL-1"),
	lazyLoad: "progressive",
	autoplay: true,
	autoplaySpeed: 4000,
});
$('.partners__slider-2').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	nextArrow: $(".partners__slider-arrowR-2"),
	prevArrow: $(".partners__slider-arrowL-2"),
	lazyLoad: "progressive",
	autoplay: true,
	autoplaySpeed: 4500,
});
$('.partners__slider-3').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	nextArrow: $(".partners__slider-arrowR-3"),
	prevArrow: $(".partners__slider-arrowL-3"),
	lazyLoad: "progressive",
	autoplay: true,
	autoplaySpeed: 5000,
})

//фикс фанси бокса и клонированный слайдов
$('.slick-cloned a').removeAttr('data-fancybox');
$('.slick-cloned a').attr('data-fancybox-trigger', 'gallery');