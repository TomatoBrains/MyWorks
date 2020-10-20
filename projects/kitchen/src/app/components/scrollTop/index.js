function scrollToTop() {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
      $(".upBtn").fadeIn();
    } else {
      $(".upBtn").fadeOut();
    }
  });
}
$(".upBtn").on("click", function () {
  $("body,html").animate({ scrollTop: 0 }, 500);
});
$(document).ready(scrollToTop());
