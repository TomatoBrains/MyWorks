function scrollTop() {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {
      $(".upBtn").fadeIn();
    } else {
      $(".upBtn").fadeOut();
    }
  });
  $(".upBtn").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 200);
  });
}
scrollTop();
