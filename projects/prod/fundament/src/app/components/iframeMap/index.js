import $ from "jquery";

let map = $(".header__map");
let mapIframe = $(".header__iframe");


map.hover(
	function () {
		mapIframe.fadeIn();
	},
	function () {
		mapIframe.fadeOut();
	}
);



