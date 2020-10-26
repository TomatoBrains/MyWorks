function ifIphone() {
  if (navigator.userAgent.toLowerCase().match(/(ipad|iphone)/)) {
    $(".paper__item-descr").css("display", "block");
  } else {
    return;
  }
}
$(document).ready(ifIphone());
