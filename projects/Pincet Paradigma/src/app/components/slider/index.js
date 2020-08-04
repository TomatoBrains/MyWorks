import $ from "jquery";
import "slick-carousel";

//workers
$(".qualification__workers-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  nextArrow: $(".arrowRight"),
  prevArrow: $(".arrowLeft"),
  responsive: [
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
});
//certificate
$(".qualification__certificate-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  nextArrow: $(".arrowRightBot"),
  prevArrow: $(".arrowLeftBot"),
  responsive: [
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
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
});
$(".reviews__screenshots-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  nextArrow: $(".reviews__screenshots-arrowRight"),
  prevArrow: $(".reviews__screenshots-arrowLeft"),
  autoplay: false,
  pauseOnHover: true,
  variableWidth: true,
  asNavFor: ".reviews__screenshots-phoneSlide",
  responsive: [
    {
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
  infinite: false,
  nextArrow: $(".screenshots__slider-arrowRight"),
  prevArrow: $(".screenshots__slider-arrowLeft"),
  autoplay: false,
  pauseOnHover: true,
  fade: true,
  responsive: [
    {
      breakpoint: 901,
      settings: {},
    },
    {
      breakpoint: 768,
      settings: {},
    },
    {
      breakpoint: 568,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
      },
    },
  ],
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
  responsive: [
    {
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
