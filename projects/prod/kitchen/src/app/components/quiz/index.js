import "ion-rangeslider";
import $ from "jquery";
var number = 0;
var maxNumber = $(".test-item").length;
var $element = $(".test-item").find("input, select, textarea");
var btnPrev = $(".quiz__prev");
var btnNext = $(".quiz__next");
var isValid;
var dataBlock;
var activeSlede = [];

for (var i = 0; i < maxNumber; i++) {
  activeSlede[i] = false;
}

$element.on("change input", function (e) {
  var value = $(this).val().trim();

  isValid = value !== "";
  btnActive(!isValid);
});
$(".num-all").text(maxNumber);
function btnActive(isValid) {
  if (number === 0) {
    btnPrev.prop("disabled", "false");
    btnPrev.hide();
    btnNext.prop("disabled", isValid);
    $(".btn-lbs").hide();
  } else {
    btnPrev.fadeIn();
    btnPrev.prop("disabled", false);
    $(".btn-lbs").hide();
    if (activeSlede[number] === true || isValid === false) {
      btnNext.prop("disabled", false);
      $(".btn-lbs").hide();
    } else {
      btnNext.prop("disabled", true);
      $(".btn-lbs").show();
    }
  }
}

var lbs = false;
$(".btn-lbs").on("click", function (event) {
  event.preventDefault();
  $(this).addClass("act");

  if (!lbs) {
    setTimeout(function () {
      $(".btn-lbs").removeClass("act");
      lbs = false;
    }, 3000);
    lbs = true;
  }
});

// sidebar

var $barLevel = 100 / (maxNumber + 1);
var $barWidth = $barLevel;
function progress(num) {
  $(".progress-bar__line").css({ width: $barWidth + "%" });
  // $('.pc').text(Math.floor($barWidth) + '%');
}
progress(0);

// btn

function btnClick() {
  btnPrev.on("click", function (event) {
    event.preventDefault();
    --number;

    $(".test-item").hide();
    $(".test-item").eq(number).fadeIn(1000);
    btnActive(!isValid);

    $(".num-current").text(number + 1);
    // animateTop ();
  });

  btnNext.on("click", function (event) {
    event.preventDefault();
    activeSlede[number] = true;
    ++number;

    btnPrev.show();
    btnActive(!isValid);

    if (activeSlede[number] === true) {
      btnNext.prop("disabled", false);
      $(".btn-lbs").hide();
    } else {
      btnNext.prop("disabled", true);
      $(".btn-lbs").show();
    }
    $barWidth += $barLevel;
    $(".test-item").hide();
    $(".test-item").eq(number).fadeIn(600);
    $(".test-right__item").hide();
    $(".test-right__item").eq(number).fadeIn(600);
    var flNum = 1;
    flNum += number;
    $(".fl-num-js").text("0" + flNum);
    $("#test-slider").slick("setPosition");
    if (number === maxNumber - 1) {
      $(".line-text").html("<span>Вопрос 5 из 5</span>");
      $(".test__btns").hide();
      $barWidth += $barLevel;
      // $('.progress').hide();
    }

    progress(number);

    // animateTop ();
    $(".num-current").text(number + 1);
  });
}
btnClick();

function animateTop(eq) {
  var elem = $(".test-scroll-js");
  var top = elem.offset().top - 15;
  $("body,html").animate({ scrollTop: top }, 400);
}

$.fn.hasAttr = function (name) {
  return this.attr(name) !== undefined;
};

$(".js-range-slider").ionRangeSlider({
  min: 0,
  max: 150,
  from: 30,
  onStart: function (data) {
    $("#qw3inp").val($(".js-range-slider").prop("value"));
  },
});
var my_range = $(".js-range-slider");

my_range.on("change input", function () {
  var $inp = $(this);
  var from2 = $inp.data("from");
  $("#qw3inp").val(from2);
});
