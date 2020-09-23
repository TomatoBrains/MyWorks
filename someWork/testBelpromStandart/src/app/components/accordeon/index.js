let acordeon = document.getElementsByClassName("qa__accordeon--btn");
let last;
for (let i = 0; i < acordeon.length; i++) {
  acordeon[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    if (this.classList.contains("show")) {
      this.classList.toggle("show");
      this.children[0].classList.toggle("active");
      panel.style.maxHeight = null;
    } else {
      this.classList.add("show");
      this.children[0].classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      if (last) {
        let panels = last.nextElementSibling;
        panels.style.maxHeight = null;
        last.classList.toggle("show", false);
        last.children[0].classList.toggle("active", false);
      }
      last = this;
      if (last.classList.contains("show") === false) {
        last.classList.add("show");
        last.children[0].classList.add("active");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  });
}
