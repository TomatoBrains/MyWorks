import $ from "jquery";
$("h1").each(mainAnime);
$("h2").each(animeTitle);
function animeTitle(anim) {
	let thisTitle = $(this);
	$(window).on('scroll', function (event) {
		let offsetTopBig = thisTitle.offset().top - $(window).height() - 30;
		if ($(document).scrollTop() > offsetTopBig) {
			thisTitle.addClass("fade-in");
		}
	});
};
function mainAnime(anim) {
	let thisAnime = $(this);
	$(document).ready(function () {
		if ($(document).ready()) {
			thisAnime.addClass("fade-in");
		}
	});
};