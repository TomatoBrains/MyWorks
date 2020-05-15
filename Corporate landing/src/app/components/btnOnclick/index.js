import $ from "jquery";

/*function changeShowClass() {
  $(".header__iframe").toggleClass("show");
  $(".header__background").toggleClass("show");
}
$(".header__video--btn").on("click", function () {
  changeShowClass();
  $("html").css("overflow", "hidden");
});
$(".header__background").on("click", function () {
  changeShowClass();
  $("html").css("overflow", "auto");
});*/
class VideoOnClick {
  constructor(obj) {
    this.headerBackground = obj.headerBackground;
    this.headerIframe = obj.headerIframe;
  }
  init() {
    this.showVideo();
  }
  changeShowClass() {
    $(this.headerIframe).toggleClass("show");
    $(this.headerBackground).toggleClass("show");
  }
  showVideo() {
    const self = this;
    $(".header__video--btn").on("click", function () {
      self.changeShowClass();
      $("html").css("overflow", "hidden");
    });
    $(this.headerBackground).on("click", function () {
      self.changeShowClass();
      $("html").css("overflow", "auto");
    });
  }
}
let videoOnClick = new VideoOnClick({
  headerBackground: ".header__background",
  headerIframe: ".header__iframe",
});
videoOnClick.init();


