function scrollTop() {
  if (window.innerWidth < 901) {
    $(window).scroll(function () {
      if ($(this).scrollTop() >= 200) {
        $(".upBtn").fadeIn();
      } else {
        $(".upBtn").fadeOut();
      }
    });
    $(".upBtn").click(function () {
      $("body,html").animate({ scrollTop: 0 }, 200);
    });
  }
}
scrollTop();
