$("details").click(function (event) {
  $("details").not(this).removeAttr("open");
});

/* $("summary").on("click", function () {
  let it = $(this);
  setTimeout(function () {
    let scrollTo = it.offset().top;
    $("body, html").animate({ scrollTop: scrollTo }, 200);
  }, 10);
}); */
$(".qa__content-item").on("click", function () {
  let scrollTo = $(this).offset().top;
  $("body, html").animate({ scrollTop: scrollTo }, 200);
});

$(".cosmetic__catalog-accordeon details").on("click", function () {
  let scrollTo = $(this).offset().top;
  $("body, html").animate({ scrollTop: scrollTo }, 200);
});
