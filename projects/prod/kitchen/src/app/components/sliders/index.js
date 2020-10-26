import $ from "jquery";
import "slick-carousel";

// popular sldier 1
var $status1 = $(".slider-pagin-status-1");
var $slickElement1 = $(".popular__slider-1");

$slickElement1.on("init reInit afterChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status1.html(
    `<span class="h36 colorM2">0${i}
	  </span> <span class="h36"> / ${slick.slideCount}</span>`
  );
});

$(".popular__slider-1").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  nextArrow: $(".popular__slider-arrowR-1"),
  prevArrow: $(".popular__slider-arrowL-1"),
  lazyLoad: "progressive",
  centerMode: true,
  lazyLoad: "progressive",
  centerPadding: "10px",
  /* variableWidth: true, */
  //infinite: false,
  // Почему-то ломает кнопку внутри слайдера, она просто не нажимается инлайн скрипт помогает, но это фигня какая-то
  responsive: [
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
});
// popular sldier 2
var $status2 = $(".slider-pagin-status-2");
var $slickElement2 = $(".popular__slider-2");

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
$(".popular__slider-2").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  nextArrow: $(".popular__slider-arrowR-2"),
  prevArrow: $(".popular__slider-arrowL-2"),
  lazyLoad: "progressive",
  centerMode: true,
  lazyLoad: "progressive",
  centerPadding: "10px",
  /* variableWidth: true, */
  //infinite: false,
  // Почему-то ломает кнопку внутри слайдера, она просто не нажимается
  responsive: [
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
});
// popular sldier 3
var $status3 = $(".slider-pagin-status-3");
var $slickElement3 = $(".popular__slider-3");

$slickElement3.on("init reInit afterChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status3.html(
    `<span class="h36 colorM2">0${i}
	  </span> <span class="h36"> / ${slick.slideCount}</span>`
  );
});
$(".popular__slider-3").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  nextArrow: $(".popular__slider-arrowR-3"),
  prevArrow: $(".popular__slider-arrowL-3"),
  lazyLoad: "progressive",
  centerMode: true,
  lazyLoad: "progressive",
  centerPadding: "10px",
  /* variableWidth: true, */
  //infinite: false,
  // Почему-то ломает кнопку внутри слайдера, она просто не нажимается
  responsive: [
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
});
// popular sldier 4
var $status4 = $(".slider-pagin-status-4");
var $slickElement4 = $(".popular__slider-4");

$slickElement4.on("init reInit afterChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status4.html(
    `<span class="h36 colorM2">0${i}
	  </span> <span class="h36"> / ${slick.slideCount}</span>`
  );
});
$(".popular__slider-4").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  nextArrow: $(".popular__slider-arrowR-4"),
  prevArrow: $(".popular__slider-arrowL-4"),
  lazyLoad: "progressive",
  centerMode: true,
  centerPadding: "10px",
  /* variableWidth: true, */
  //infinite: false,
  // Почему-то ломает кнопку внутри слайдера, она просто не нажимается
  responsive: [
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
  ],
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
//quiz slider
$(".test-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  nextArrow: $(".quiz__slider-arrowR-1"),
  prevArrow: $(".quiz__slider-arrowL-1"),
  lazyLoad: "progressive",
  autoplaySpeed: 4000,
  /* responsive: [
    {
      breakpoint: 577,
      settings: {
        slidesToShow: 1,
      },
    },
  ], */
});
