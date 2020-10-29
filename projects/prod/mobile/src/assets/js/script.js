// var lazyLoadInstance = new LazyLoad({
//          elements_selector: ".lazy"

//      });

$(document).ready(function ($) {
  $(".header__menu-btn").on("click", function () {
    $(".header__menu-mobile").fadeIn();
    $("html").addClass("stop");
  });
  $(".header__menu-mob a").on("click", function () {
    $(".header__menu-mobile").fadeOut();
    $("html").removeClass("stop");
  });
  $(".header__menu-close").on("click", function () {
    $(".header__menu-mobile").fadeOut();
    $("html").removeClass("overflowHidden");
  });

  var offsetTop = $(window).height() * 2;
  $(window).scroll(function (event) {
    if ($(document).scrollTop() > offsetTop) {
      $(".to_top").addClass("act");
    } else {
      $(".to_top").removeClass("act");
    }
  });
  $(".to_top").on("click", function (event) {
    var top = 0;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".close, .back-close").on("click", function (event) {
    event.preventDefault();
    if ($(this).hasClass("close-nav")) {
      $(".nav__wrap").removeClass("active");
      $(".nav-overlay").fadeOut();
    }
    $(".card-js").removeClass("zi0");
    $(".arrows").removeClass("zi0");
    if ($(this).hasClass("cln")) {
      $(".mn-right-it-1").show();
      $(".mn-right-it-2").hide();
      $(".mn-right-it-3").hide();
    }

    $(".overlay").fadeOut();
    $("html").removeClass("stop");
  });

  $(".burger__wrap").on("click", function (event) {
    event.preventDefault();
    $(".nav__wrap").addClass("active");
    $(".nav-overlay").fadeIn();
    $(".zi1").css("z-index", "0");
    $(".main").css("z-index", "20");
  });

  $(".overlay")
    .not("#modal-page")
    .mouseup(function (e) {
      var container = $(".modal-wrap");
      if (container.has(e.target).length === 0 && !container.is(e.target)) {
        $("html").removeClass("stop");
        $(".overlay").fadeOut();
        $(".mn-right-it-1").show();
        $(".mn-right-it-2").hide();
        $(".mn-right-it-3").hide();
      }
    });

  // $('.btn-prc-js').on('click', function(event) {
  //   event.preventDefault();
  //   $('html').addClass('stop');
  //   $('#modal-order').fadeIn();
  // });
  $(".btn-call-js").on("click", function (event) {
    event.preventDefault();
    $("html").addClass("stop");
    $("#modal-call").fadeIn();
  });
  $(".btn-zamer-js").on("click", function (event) {
    event.preventDefault();
    $("html").addClass("stop");
    $("#modal-zamer").fadeIn();
  });
  $(".btn-zakaz-1-js").on("click", function (event) {
    event.preventDefault();
    $("html").addClass("stop");

    var tlt = $(this)
      .parents(".shtory-right")
      .find(".tlt-one-js")
      .text()
      .trim();
    $(".tlt-js").text(tlt);
    $(".inp-js").val(tlt);
    $("#modal-zakaz").fadeIn();
  });

  // modal-call
  // modal-zamer
  // modal-zakaz

  // tlt-js
  // inp-js

  $(".polit-js , .check-box").on("click", function (event) {
    event.preventDefault();
    $("html").addClass("stop");
    $("#politics").fadeIn();
  });

  $(".link-scroll").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".fancy-class, .play, .gallery__item").fancybox({
    buttons: ["slideShow", "zoom", "fullScreen", "close"],
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionEffect: "circular",
    transitionDuration: 420,
  });

  d = new Date();
  monthA = "января,февраля,марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря".split(
    ","
  );
  // d.setMonth(d.getMonth() + 1);
  $(".date-js").text(" " + d.getDate() + " " + monthA[d.getMonth()]);

  $(".nav a, .footer-nav a").on("click", function (event) {
    if ($(this).attr("href") === "#not") {
      return false;
    } else {
      if ($(this).parents(".nav__wrap").hasClass("active")) {
        if ($(window).width() < 900) {
          $(".nav__wrap").removeClass("active");
          $(".overlay").fadeOut();
          $("html").removeClass("stop");
        }
      }
      var id = $(this).attr("href"),
        top = $(id).offset().top;
      $("body,html").animate({ scrollTop: top }, 1000);
    }
  });

  $(".btn-prices-js-a").on("click", function (event) {
    event.preventDefault();
    var id = $("#pforms").offset().top;
    $("body,html").animate({ scrollTop: id }, 400);
  });

  $(".title, .title-lg , .title-b").not(".title-first").each(anime);
  $(".t-min, .t-ss, .t-min2").not(".title-first").each(anime);
  // $(".title-descr").not('.subtitle-first').each(anime);
  function anime(anim) {
    // var offsetTop = thisTitle.offset().top - $(window).height() - 10;
    var thisTitle = $(this);
    $(window).scroll(function (event) {
      var offsetTop = thisTitle.offset().top - $(window).height() - 40;
      if ($(document).scrollTop() > offsetTop) {
        thisTitle.addClass("fade_in");
      }
    });
  }

  $(".flst1 a").on("click", function (event) {
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 600);
  });

  $(".to_catalog").on("click", function (event) {
    event.preventDefault();
    var id = $(".tab").offset().top - 20;
    $("body,html").animate({ scrollTop: id }, 600);
  });

  $(".gtab__tab-item").on("click", function () {
    if ($(window).width() < 767) {
      var elem = $(".garant__right");
      var top = elem.offset().top - 15;
      $("body,html").animate({ scrollTop: top }, 400);
    }
  });

  $(".read").on("click", function (event) {
    event.preventDefault();
    if (!$(this).hasClass("show")) {
      $(this).addClass("show").text("Скрыть");
      $(this).parents(".shtory-right-one").find("li").fadeIn();
    } else {
      $(this).removeClass("show").text("Читать далее");
      $(this)
        .parents(".shtory-right-one")
        .find("li")
        .each(function (index, el) {
          if (index > 2) {
            $(this).hide();
          }
        });
    }
  });

  $(".shtory-tab__item").on("click", function (event) {
    event.preventDefault();
    if (!$(this).hasClass("active")) {
      $(".shtory-tab__item").removeClass("active");
      $(this).addClass("active");
      $(".shtory-block").hide().eq($(this).index()).fadeIn();
    }
  });
});

// var offsetTop = $(".zakaz-line").outerHeight();
// var thisTitle = $(".header-scroll");

var darkSection = $(".zakaz-line").offset().top - $(window).height();
var darkSection2 = $(".zakaz").offset().top - $(window).height();

// var thisTitleH = $(".header").outerHeight();
$(window).scroll(function (event) {
  darkSection = $(".zakaz-line").offset().top - $(window).height();
  darkSection2 = $(".zakaz").offset().top - $(window).height();

  if (
    $(window).scrollTop() > darkSection &&
    $(window).scrollTop() < darkSection2 + $(".zakaz").outerHeight()
  ) {
    $(".zakaz-line-act").addClass("active");
  }
});
