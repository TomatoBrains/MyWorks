$(document).ready(function () {
  var url = document.location.href;
  $.each($(".header__menu a"), function () {
    if (this.href == url) {
      $(this).addClass("menu--active");
    }
  });
});
