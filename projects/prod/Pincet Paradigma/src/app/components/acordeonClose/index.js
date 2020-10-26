/*$("details").click(function (event) {
  $("details").not(this).removeAttr("open");
});*/

/* $("summary").on("click", function () {
  let it = $(this);
  setTimeout(function () {
	let scrollTo = it.offset().top;
	$("body, html").animate({ scrollTop: scrollTo }, 200);
  }, 10);
}); */
/*$(".qa__content-item").on("click", function () {
  let scrollTo = $(this).offset().top;
  $("body, html").animate({ scrollTop: scrollTo }, 200);
});

$(".cosmetic__catalog-accordeon details").on("click", function () {
  let scrollTo = $(this).offset().top;
  $("body, html").animate({ scrollTop: scrollTo }, 300);
});*/
/*$(".programm__content-days--accordeon details").on("click", function () {
  let scrollTo = $(this).parent().parent().offset().top;
  $("body, html").animate({
	scrollTop: scrollTo
  }, 200);
});*/

let acordeon = document.getElementsByClassName("acordeon");
let openClass = "showDet";
let paddingClass = "pad1";

let last;

function detOpen(acordeon) {
	for (let i = 0; i < acordeon.length; i++) {
		acordeon[i].addEventListener("click", function (e) {
			e.preventDefault();
			let panel = this.children[1];
			if (this.parentElement.classList.contains('programm__content-days--accordeon')) {
				openClass = 'showDet2';
				paddingClass = 'pad2'
			}
			if (this.parentElement.classList.contains('cosmetic__catalog-accordeon')) {
				openClass = 'showDet3';
				paddingClass = 'pad2'
			}
			if (this.classList.contains(openClass)) {
				this.classList.toggle(openClass);
				this.children[1].classList.toggle(paddingClass);
				panel.style.maxHeight = null;
			} else {
				this.classList.add(openClass);
				this.children[1].classList.add(paddingClass);
				panel.style.maxHeight = panel.scrollHeight + 20 + "px";
				if (last) {
					let panels = last.children[1];
					panels.style.maxHeight = null;
					last.classList.toggle(openClass, false);
					last.children[1].classList.toggle(paddingClass, false);
				}
				last = this;
				if (last.classList.contains(openClass) === false) {
					last.classList.add(openClass);
					last.children[1].classList.add(paddingClass);
					panel.style.maxHeight = panel.scrollHeight + 20 + "px";
				}
			}
		});
	}
}
detOpen(acordeon);