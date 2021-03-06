import $ from "jquery";
import "slick-carousel";

//workers
$(".qualification__workers-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  nextArrow: $(".arrowRight"),
  prevArrow: $(".arrowLeft"),
  autoplay: true,
  autoplaySpeed: 3000,
  lazyLoad: "progressive",
  responsive: [{
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//certificate
$(".qualification__certificate-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  nextArrow: $(".arrowRightBot"),
  prevArrow: $(".arrowLeftBot"),
  autoplay: true,
  autoplaySpeed: 3000,
  lazyLoad: "progressive",
  responsive: [{
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//screenshots
$(".reviews__screenshots-phoneSlide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".reviews__screenshots-slider",
  //variableWidth: true,
  cssEase: 'linear',
  //lazyLoad: "progressive",
});
$(".reviews__screenshots-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  nextArrow: $(".reviews__screenshots-arrowRight"),
  prevArrow: $(".reviews__screenshots-arrowLeft"),
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  variableWidth: true,
  asNavFor: ".reviews__screenshots-phoneSlide",
  //lazyLoad: "progressive",
  responsive: [{
      breakpoint: 901,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//masasge sliders
$(".master__workers-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  nextArrow: $(".arrowRight"),
  prevArrow: $(".arrowLeft"),
  autoplay: true,
  autoplaySpeed: 3000,
  asNavFor: ".master__descr-slider",
  lazyLoad: "progressive",
  responsive: [{
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".master__descr-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  fade: true,
  asNavFor: ".master__workers-slider",
  lazyLoad: "progressive",
});
$(".master__certificate-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  nextArrow: $(".arrowRightBot"),
  prevArrow: $(".arrowLeftBot"),
  autoplay: true,
  autoplaySpeed: 3000,
  lazyLoad: "progressive",
  responsive: [{
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
//about screenshots
var $status = $(".screenshots__slider-paging");
var $slickElement = $(".screenshots__slider-phoneSlide");

$slickElement.on("init reInit afterChange", function (
  event,
  slick,
  currentSlide,
  nextSlide
) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.html(
    `<span class='bold roze'>${i}</span>  /  <span>${slick.slideCount}</span>`
  );
});
$(".screenshots__slider-phoneSlide").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  nextArrow: $(".screenshots__slider-arrowRight"),
  prevArrow: $(".screenshots__slider-arrowLeft"),
  //autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  variableWidth: true,
  asNavFor: ".screenshots__mesage-items",
  lazyLoad: "progressive",
  responsive: [{
      breakpoint: 901,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
});
$(".screenshots__mesage-items").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  //autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  variableWidth: true,
  asNavFor: ".screenshots__slider-phoneSlide",
  //fade: true,
  lazyLoad: "progressive",
});
//graduate slider
$(".graduate__student-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  nextArrow: $(".graduate__student-slider--arrowR"),
  prevArrow: $(".graduate__student-slider--arrowL"),
  autoplay: false,
  pauseOnHover: true,
  variableWidth: true,
  lazyLoad: "progressive",
  responsive: [{
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
      },
    },
  ],
});