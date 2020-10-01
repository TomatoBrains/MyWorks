import $ from 'jquery';
import "slick-carousel";
//types slider
$('.types__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	nextArrow: $(".partners__slider-arrowR-1"),
	prevArrow: $(".partners__slider-arrowL-1"),
	lazyLoad: "progressive",
	autoplay: true,
	autoplaySpeed: 4000,
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
