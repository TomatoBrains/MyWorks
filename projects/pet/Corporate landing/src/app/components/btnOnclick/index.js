import $ from "jquery";

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


