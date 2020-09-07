$(".btn-vd").on("click", function (event) {
  event.preventDefault();
  $(this).toggleClass("show1");
  if ($(this).hasClass("show1")) {
    var screenTop = $(document).scrollTop();
    $(this).addClass("show1").find(".text18").text("СКРЫТЬ");
    itemFilter(100, 100);
    $("body,html").animate({ scrollTop: screenTop }, 1);
  } else {
    var screenTop = $(".papers__filter").offset().top;
    $(this).removeClass("show1").find(".text18").text("ПОКАЗАТЬ ЕЩЁ");
    itemFilter(1, 6);
    $("html").animate({ scrollTop: screenTop }, 1);
  }
});
$(".vid-tab-item").on("click", function (event) {
  event.preventDefault();
  if (!$(this).hasClass("active")) {
    $(".vid-tab-item").removeClass("active");
    $(this).addClass("active");
    t1 = $(this).text().trim();
    itemFilter(1, 6);
    $(".btn-vd").removeClass("show1").find(".text18").text("ПОКАЗАТЬ ЕЩЁ");
  }
});
var t1 = $(".vid-tab-item.active").text().trim();
var ns = 1;
function itemFilter(num, num2) {
  dataTab(num2);
}
function dataTab(num2) {
  ns = 1;
  $(".vid-item").each(function (index, el) {
    var tlt2 = $(this).data("order");
    if (tlt2.toLowerCase().indexOf(t1.toLowerCase()) !== -1) {
      if (ns > num2) {
        $(this).hide();
      } else {
        $(this).fadeIn();
      }
      ++ns;
    } else {
      $(this).hide();
    }
  });
}
