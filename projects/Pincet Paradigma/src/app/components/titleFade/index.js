import $ from "jquery";

$("h1").each(mainAnime);
$("h2").each(anime);
$("h3").each(anime);
$(".wait__img").each(anime);
$(".complex__item").each(anime);
$(".fade__content").each(mainAnime);
$(".animat").each(anime);
function anime(anim) {
  var thisTitle = $(this);
  $(window).scroll(function (event) {
    var offsetTop = thisTitle.offset().top - $(window).height() - 10;
    if ($(document).scrollTop() > offsetTop) {
      thisTitle.addClass("fade_in");
    }
  });
}

function mainAnime(anim) {
  var thisAnime = $(this);
  $(document).ready(function () {
    if ($(document).ready()) {
      thisAnime.addClass("fade_in");
    }
  });
}
