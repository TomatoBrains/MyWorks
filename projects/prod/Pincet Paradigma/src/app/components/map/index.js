import $ from "jquery";

let map = $(".header__map");
let mapIframe = $(".header__map-iframe");
let mobClick = $(".map_click--mob");
let mapIframeMob = $(".iframe__mob");
function mapHover() {
  map.hover(
    function () {
      mapIframe.css("display", "block");
    },
    function () {
      mapIframe.css("display", "none");
    }
  );
}
mapHover();
function mapHoverMob() {
  mobClick.hover(
    function () {
      mapIframeMob.css("display", "block");
    },
    function () {
      mapIframeMob.css("display", "none");
    }
  );
}
mapHoverMob();
