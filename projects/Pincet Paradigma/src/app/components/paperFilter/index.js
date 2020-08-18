var fActive = "";
function filterColor(tag) {
  if (fActive != tag) {
    $(".sort")
      .filter("." + tag)
      .slideDown();
    $(".sort")
      .filter(":not(." + tag + ")")
      .slideUp();
    fActive = tag;
  }
}
$(".dep").click(function () {
  filterColor("dep-tag");
});
$(".shug").click(function () {
  filterColor("shug-tag");
});
$(".anti").click(function () {
  filterColor("anti-tag");
});
$(".disc").click(function () {
  filterColor("disc-tag");
});
$(".other").click(function () {
  filterColor("other-tag");
});
// для отображения всех
$(".f-all").click(function () {
  $("div").slideDown();
  fActive = "all";
});

$(".papers__filter-item").on("click", function () {
  $(".papers__filter-item").removeClass("tagActive");
  $(this).addClass("tagActive");
});
