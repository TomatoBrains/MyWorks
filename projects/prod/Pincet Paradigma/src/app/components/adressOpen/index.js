import $ from "jquery";
let inputYes = $("#delivery-yes");
let inputNo = $("#delivery-no");
let adress = $(".cosmetic__cart-request--adress");

inputYes.change(function adressOpen() {
  if (inputYes.prop("checked")) {
    adress.addClass("show");
  }
});
inputNo.click(function adressClose() {
  adress.removeClass("show");
});
