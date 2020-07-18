window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  let blur = document.querySelectorAll(".blur");
  blur.forEach(function (elem) {
    elem.style.transform = "translate(-" + x * 15 + "px, -" + y * 15 + "px)";
    elem.style.transform = "translate(-" + x * 15 + "px, -" + y * 15 + "px)";
  });
});
