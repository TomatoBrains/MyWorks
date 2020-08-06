import $ from "jquery";

let map = $(".header__map");
let mapIframe = $(".header__map-iframe");

function mapHover() {
  if (window.innerWidth < 901) {
    return;
  } else {
    map.hover(
      function () {
        mapIframe.css("display", "block");
      },
      function () {
        mapIframe.css("display", "none");
      }
    );
  }
}
mapHover();
