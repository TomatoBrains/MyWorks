//popular tabs
$(function () {
  var tab = $(".popular__tabs > .tab");
  /*  tab.hide().filter(":first").fadeIn(800, "linear"); */
  $(".popular__tabBtn a")
    .click(function () {
      tab.hide();
      tab.filter($(this).data("id")).fadeIn(1000, "linear");
      $(".popular__slider").slick("setPosition");
      $(".popular__tabBtn a").removeClass("active");
      $(".popular__tabBtn a").removeClass("tab-target");
      $(this).addClass("active");
      $(this).addClass("tab-target");
      return false;
    })
    .filter(":first")
    .click();
});
