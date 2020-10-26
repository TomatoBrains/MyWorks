import $ from "jquery";

window.jQuery = $;

window.$ = window.jQuery = require("jquery");

const fancybox = require("@fancyapps/fancybox");

$('[data-fancybox="gallery"]').fancybox({
  arrows: true,
  thumbs: false,
});
