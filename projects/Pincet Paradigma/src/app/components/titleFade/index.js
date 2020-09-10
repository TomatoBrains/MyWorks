import $ from "jquery";

$("h1").each(mainAnime);
$("h2").each(animeTitle);
$("h3").each(animeTitle);
$(".wait__img").each(anime);
$(".complex__item").each(anime);
$(".fade__content").each(mainAnime);
$(".animat").each(anime);
function animeTitle(anim) {
  let thisTitle = $(this);
  $(window).scroll(function (event) {
      let offsetTopBig = thisTitle.offset().top - $(window).height() - 30;
      if ($(document).scrollTop() > offsetTopBig) {
        thisTitle.addClass("fade_in");
      }
  });
}
function anime(anim) {
  let thisTitle = $(this);
  $(window).scroll(function (event) {
    if ($(window).width() <= "600") {
      /*let offsetTop = thisTitle.offset().top - $(window).height() - 50;
      if ($(document).scrollTop() > offsetTop) {
        thisTitle.addClass("fade_in");
      }*/
      return
    } else {
      let offsetTopBig = thisTitle.offset().top - $(window).height() - 30;
      if ($(document).scrollTop() > offsetTopBig) {
        thisTitle.addClass("fade_in");
      }
    }
  });
}

function mainAnime(anim) {
  let thisAnime = $(this);
  $(document).ready(function () {
    if ($(document).ready()) {
      thisAnime.addClass("fade_in");
    }
  });
}
