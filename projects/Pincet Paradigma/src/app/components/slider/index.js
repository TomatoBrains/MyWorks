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
