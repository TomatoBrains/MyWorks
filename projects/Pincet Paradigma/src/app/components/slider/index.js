import $ from "jquery";
import "slick-carousel";

$(".qualification__workers-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  nextArrow: $(".arrowRight"),
  prevArrow: $(".arrowLeft"),
  responsive: [
    {
      breakpoint: 900,
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
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".qualification__certificate-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  infinite: false,
  responsive: [
    {
      breakpoint: 900,
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
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
