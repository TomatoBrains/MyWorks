let paralaxItem = document.querySelectorAll(".paralax");
paralaxItem.forEach(function (item) {
	paralax(item);
});
function paralax(item) {
	window.addEventListener("mousemove", function (e) {
		if ($(window).innerWidth() > 992) {
			let x = e.clientX / window.innerWidth;
			let y = e.clientY / window.innerHeight;
			item.style.transform = "translate(-" + x * 15 + "px, -" + y * 15 + "px)";
			item.style.transform = "translate(-" + x * 15 + "px, -" + y * 15 + "px)";
		}

	});
}