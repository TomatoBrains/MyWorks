let blurRight = document.querySelector(".header_blurRight");
let blurLeft = document.querySelector(".main__descr_blurLeft");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  blurRight.style.transform = "translate(-" + x * 15 + "px, -" + y * 15 + "px)";
  blurLeft.style.transform = "translate(-" + x * 15 + "px, -" + y * 15 + "px)";
});
