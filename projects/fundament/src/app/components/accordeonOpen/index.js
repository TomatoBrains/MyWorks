let acordeon = document.getElementsByClassName("acordeon");
let openClass = "showDet";
let paddingClass = "pad";

let last;

function detOpen(acordeon) {
	for (let i = 0; i < acordeon.length; i++) {
		acordeon[i].addEventListener("click", function (e) {
			e.preventDefault();
			let panel = this.children[1];
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