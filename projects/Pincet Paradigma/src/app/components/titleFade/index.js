import $ from "jquery";

$("h2").each(anime);
$("h3").each(anime);
// $(".title-descr").not('.subtitle-first').each(anime);
function anime(anim) {
  // var offsetTop = thisTitle.offset().top - $(window).height() - 10;
  var thisTitle = $(this);
  $(window).scroll(function (event) {
    var offsetTop = thisTitle.offset().top - $(window).height() - 10;
    if ($(document).scrollTop() > offsetTop) {
      thisTitle.addClass("fade_in");
    }
  });
}
