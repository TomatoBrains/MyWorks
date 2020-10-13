import $ from "jquery";
import "slick-carousel";

// popular sldier
var $status2 = $(".slider-pagin-status");
var $slickElement2 = $(".popular__slider");

$slickElement2.on("init reInit afterChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status2.html(
    `<span class="h36 colorM2">0${i}
	  </span> <span class="h36"> / ${slick.slideCount}</span>`
  );
});
$(".popular__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  nextArrow: $(".popular__slider-arrowR"),
  prevArrow: $(".popular__slider-arrowL"),
  lazyLoad: "progressive",
  autoplay: true,
  autoplaySpeed: 4000,
  centerMode: true,
  centerPadding: "10px",
  /* variableWidth: true, */
  //infinite: false,
  // Почему-то ломает кнопку внутри слайдера, она просто не нажимается
  /* responsive: [{
		breakpoint: 993,
		settings: {
			slidesToShow: 1,
			centerMode: false,
			centerPadding: '0%',
			variableWidth: false,
			dots: true,
			arrows: false,
		},
	},] */
});
//cases slider
var $status = $(".cases-slider-pagin-status");
var $slickElement = $(".cases__slider");

$slickElement.on("init reInit afterChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.html(
    `<span class="h36 colorM2">0${i}
	  </span> <span class="h36"> / ${slick.slideCount}</span>`
  );
});
$(".cases__slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  nextArrow: $(".cases__slider-arrowR"),
  prevArrow: $(".cases__slider-arrowL"),
  lazyLoad: "progressive",
  /*  autoplay: true, */
  autoplaySpeed: 4000,
  /*  variableWidth: true, */
  //infinite: false,
  // Почему-то ломает кнопку внутри слайдера, она просто не нажимается
  /* responsive: [{
		breakpoint: 993,
		settings: {
			slidesToShow: 1,
			centerMode: false,
			centerPadding: '0%',
			variableWidth: false,
			dots: true,
			arrows: false,
		},
	},] */
});
//фикс фанси бокса и клонированный слайдов
$(".slick-cloned a").removeAttr("data-fancybox");
$(".slick-cloned a").attr("data-fancybox-trigger", "gallery");
