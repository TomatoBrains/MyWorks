import $ from "jquery";

window.jQuery = $;

window.$ = window.jQuery = require("jquery");

const fancybox = require("@fancyapps/fancybox");

$('[data-fancybox="gallery1"]').fancybox({
	arrows: true,
	thumbs: false,
});
$('[data-fancybox="gallery2"]').fancybox({
	arrows: true,
	thumbs: false,
});
$('[data-fancybox="gallery3"]').fancybox({
	arrows: true,
	thumbs: false,
});
