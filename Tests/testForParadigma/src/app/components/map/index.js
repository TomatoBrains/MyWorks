import $ from "jquery";

let map = $(".header__map");
let mapIframe = $(".header__map-iframe");

map.hover(
  function () {
    mapIframe.css("display", "block");
  },
  function () {
    mapIframe.css("display", "none");
  }
);
