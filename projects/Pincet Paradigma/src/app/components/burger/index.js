$(".header__menu--show").on("click", function () {
  $(".header__burger-menu")
    .addClass("header__menu-show")
    .animate({ opacity: 1 }, 200);
  $("html").addClass("overflowToggle");
});
$(".header__burger-close").on("click", function () {
  $(".header__burger-menu")
    .removeClass("header__menu-show")
    .animate({ opacity: 0 }, 200);
  $("html").removeClass("overflowToggle");
});
