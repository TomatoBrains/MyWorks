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
    $(".header__mob").fadeOut();
    $("html").removeClass("overflowHidden");
  });
  $(".productItem__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: $(".productItem-arrowR"),
    prevArrow: $(".productItem-arrowL"),
    autoplay: true,
    dots: true,
    dotsClass: "productItem__dots",
    autoplaySpeed: 3000,
    // fade: true
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
  $(".callModalBtn").on("click", function (event) {
    event.preventDefault();
    $("html").addClass("stop");
    $("#callModal").fadeIn();
  });
  $(".orderModalBtn").on("click", function (event) {
    event.preventDefault();
    $("html").addClass("stop");
    $("#orderModal").fadeIn();
  });
  $(".startModalBtn").on("click", function (event) {
    event.preventDefault();
    $("html").addClass("stop");
    $("#startModal").fadeIn();
  });
  $(".styleModalBtn").on("click", function (event) {
    event.preventDefault();
    $("html").addClass("stop");
    $("#styleModal").fadeIn();
  });
  $(".check-line").on("click", function (event) {
    event.preventDefault();
    $("html").addClass("stop");
    $("#politics").fadeIn();
  });
  $(".header__burger").on("click", function (e) {
    $("html").addClass("stop");
    $(".header__mob").fadeIn();
  });

  $(".link-scroll").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".fancy-class, .play, .gallery__item, .rew__slider-imgs > a").fancybox({
    buttons: ["slideShow", "zoom", "fullScreen", "close"],
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionEffect: "circular",
    transitionDuration: 420,
  });
  ///////// slic fix
  $(".slick-cloned a").removeAttr("data-fancybox");
  $(".slick-cloned a").attr("data-fancybox-trigger", "rew");
  $(".small__slider-item").each(function (index, el) {
    var ind = index;
    $(this)
      .find(".small__slider-gallery-item")
      .each(function (index, el) {
        // $(this).data('fancybox', 'small-g-'+ ind);
        $(this).attr({
          "data-fancybox": "small-g" + ind,
        });
      });
  });
  $('a[href^="#"]').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var t = $(this.hash);
      if (
        ((t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")), t.length)
      )
        return $("html,body").animate({ scrollTop: t.offset().top }, 500), !1;
    }
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
      // console.log('22');
      if ($(this).parents(".nav__wrap").find(".close").hasClass("close-nav")) {
        if ($(window).width() < 900) {
          $(".nav__wrap").removeClass("active");
          $(".nav-overlay, .nav__wrap").fadeOut();
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
  $(window).scroll(function () {
    let target = $(".footer");
    let targetPos = target.offset().top;
    let targetHeight = target.height();
    let winHeight = $(window).height();
    let scrollToElem = targetPos - winHeight;
    let winScrollTop = $(this).scrollTop();
    if (winScrollTop - targetHeight / 2 > scrollToElem) {
      $(".aside").addClass("aside--bottom");
    } else {
      $(".aside").removeClass("aside--bottom");
    }
  });
  $(".seo__more").on("click", function () {
    $(".seo__content").toggleClass("show__seo");
    $(this).toggleClass("seo__more-show");
  });
});

// var offsetTop = $(".zakaz-line").outerHeight();
// var thisTitle = $(".header-scroll");

// var darkSection = $(".zakaz-line").offset().top - $(window).height();
// var darkSection2 = $(".zakaz").offset().top - $(window).height();

// var thisTitleH = $(".header").outerHeight();
// $(window).scroll(function (event) {
//   darkSection = $(".zakaz-line").offset().top - $(window).height();
//   darkSection2 = $(".zakaz").offset().top - $(window).height();

//   if (
//     $(window).scrollTop() > darkSection &&
//     $(window).scrollTop() < darkSection2 + $(".zakaz").outerHeight()
//   ) {
//     $(".zakaz-line-act").addClass("active");
//   }
// });

$(".ivvv1").on("change input", function () {
  if ($(this).hasClass("tg")) {
    $(".inp-enp-ph1").attr("placeholder", "Ваш телефон в Telegram");
    // $('.eml').hide();
  } else if ($(this).hasClass("ws")) {
    $(".inp-enp-ph1").attr("placeholder", "Ваш телефон в WhatsApp");
    // $('.eml').hide();
  } else if ($(this).hasClass("vb")) {
    $(".inp-enp-ph1").attr("placeholder", "Ваш телефон в Viber");
    // $('.eml').hide();
  } else if ($(this).hasClass("mail")) {
    $(".inp-enp-ph1").attr("placeholder", "Ваш телефон ");
    // $('.eml').fadeIn();
  }
});
$(".ivvv2").on("change input", function () {
  if ($(this).hasClass("tg")) {
    $(".inp-enp-ph2").attr("placeholder", "Ваш телефон в Telegram");
    // $('.eml').hide();
  } else if ($(this).hasClass("ws")) {
    $(".inp-enp-ph2").attr("placeholder", "Ваш телефон в WhatsApp");
    // $('.eml').hide();
  } else if ($(this).hasClass("vb")) {
    $(".inp-enp-ph2").attr("placeholder", "Ваш телефон в Viber");
    // $('.eml').hide();
  } else if ($(this).hasClass("mail")) {
    $(".inp-enp-ph2").attr("placeholder", "Ваш телефон ");
    // $('.eml').fadeIn();
  }
});

$(".ivvv3").on("change input", function () {
  if ($(this).hasClass("tg")) {
    $(".inp-enp-ph3").attr("placeholder", "Ваш телефон в Telegram");
    // $('.eml').hide();
  } else if ($(this).hasClass("ws")) {
    $(".inp-enp-ph3").attr("placeholder", "Ваш телефон в WhatsApp");
    // $('.eml').hide();
  } else if ($(this).hasClass("vb")) {
    $(".inp-enp-ph3").attr("placeholder", "Ваш телефон в Viber");
    // $('.eml').hide();
  } else if ($(this).hasClass("mail")) {
    $(".inp-enp-ph3").attr("placeholder", "Ваш телефон ");
    // $('.eml').fadeIn();
  }
});
let acordeon = document.getElementsByClassName("acordeon");
let acordeon2 = document.getElementsByClassName("acordeon2");
let openClass = "showDet";
let paddingClass = "pad";
let last;
let last2;
function detOpen(acordeon, last) {
  for (let i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener("click", function (e) {
      e.preventDefault();
      let panel = this.children[1];
      if (this.classList.contains(openClass)) {
        this.classList.toggle(openClass);
        this.children[1].classList.toggle(paddingClass);
        panel.style.maxHeight = null;
      } else {
        this.classList.add(openClass);
        this.children[1].classList.add(paddingClass);
        panel.style.maxHeight = panel.scrollHeight + 20 + "px";
        if (last) {
          let panels = last.children[1];
          panels.style.maxHeight = null;
          last.classList.toggle(openClass, false);
          last.children[1].classList.toggle(paddingClass, false);
        }
        last = this;
        if (last.classList.contains(openClass) === false) {
          last.classList.add(openClass);
          last.children[1].classList.add(paddingClass);
          panel.style.maxHeight = panel.scrollHeight + 20 + "px";
        }
      }
    });
  }
}
detOpen(acordeon, last);
detOpen(acordeon2, last2);
