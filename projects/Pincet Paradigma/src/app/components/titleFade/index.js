import $ from "jquery";

function footerDeleteClass() {
  if ($(location).attr('pathname') === '/kontakty/') {
    $('.description__title h2').addClass('fade__content');
    $('body *').removeClass('animat');
  }
}
footerDeleteClass();

$("h1").each(mainAnime);
$("h2").each(animeTitle);
$("h3").each(animeTitle);
$(".wait__img").each(anime);
$(".complex__item").each(anime);
$(".fade__content").each(mainAnime);
$(".animat").each(anime);

$(".blur").each(blurAnima);
$('.blur2').each(blurAnima);
function blurAnima(anim) {
  let thisTitle = $(this);
  $(window).scroll(function() {
    var top_of_element = thisTitle.offset().top;
    var bottom_of_element = thisTitle.offset().top + thisTitle.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        if (thisTitle.hasClass("blur2")) {
          thisTitle.css('animation', 'transform-shiver2 3000ms linear 0ms infinite normal both')
        }
        else {
          thisTitle.css('animation', 'transform-shiver 4000ms linear 0ms infinite normal both')
        }
    } else {
        thisTitle.css('animation', 'unset')
    }
});
};


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


