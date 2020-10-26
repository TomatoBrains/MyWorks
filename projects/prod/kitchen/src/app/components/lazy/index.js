import $ from "jquery";

window.jQuery = $;

window.$ = window.jQuery = require("jquery");

const Lazy = require("jquery-lazy");
$(function () {
  $(".lazy").Lazy({
    effect: "fadeIn",
    effectTime: "300",
  });
  $(".lazyVis").Lazy({
    effect: "fadeIn",
    effectTime: "150",
    visibleOnly: true,
  });
});
