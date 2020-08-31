//add html to cart
$(".cosmetic__catalog-item a").on("click", function () {
  let it = $(this);
  $(".cosmetic__cart-item").each(function () {
    if ($(this).data("id") == it.data("id")) {
      $(this).remove();
    } else {
      return;
    }
  });
  $(
    ".cosmetic__cart-items"
  ).append(` <div class="cosmetic__cart-item" data-id="${it.data("id")}">
    <div class="cosmetic__cart-item--title mtxt">
        ${it.data("title")}
    </div>
    <div class="cosmetic__cart-item--content mtxt">
        <p class="cosmetic__cart-count">${it.data("count")} шт</p>
        <p class="roze cosmetic__cart-price">${it.data("price")} руб</p>
    </div>
    <div class="cosmetic__cart-delete">
                                            <a>УДАЛИТЬ</a>
                                        </div>
</div>`);
  totalSumCount();
});
//plus and minus btns
$(".cosmetic__catalog-item").each(function () {
  let plusBtn = $(this).find(".cosmetic-btn--plus");
  let minusBtn = $(this).find(".cosmetic-btn--minus");
  let price = $(this).find(".cosmetic__catalog-price--main");
  let inCartBtn = $(this).find(".cosmetic__catalog-price--btn a");
  let dataPrice = $(this).find(".cosmetic__catalog-price--btn a").data("price");
  plusBtn.on("click", function () {
    let inputVal = $(this).siblings("input").val();
    let btnId = $(this).data("id");
    $(this)
      .siblings("input")
      .val(++inputVal);
    price.html(`${inputVal * dataPrice} <span>руб<span>`);
    inCartBtn.data("price", inputVal * dataPrice);
    inCartBtn.data("count", inputVal);
    cartRecount(btnId, inputVal, dataPrice);
    totalSumCount();
  });
  minusBtn.on("click", function () {
    let inputVal = $(this).siblings("input").val();
    let btnId = $(this).data("id");
    if (inputVal <= 1) {
      return;
    } else {
      $(this)
        .siblings("input")
        .val(--inputVal);
      price.html(`${inputVal * dataPrice} <span>руб<span>`);
      inCartBtn.data("price", inputVal * dataPrice);
      inCartBtn.data("count", inputVal);
    }
    totalSumCount();
    cartRecount(btnId, inputVal, dataPrice);
  });
});
//cart delete btn
$("body").on("click", ".cosmetic__cart-delete", function (e) {
  $(this).closest(".cosmetic__cart-item").remove();
  totalSumCount();
});
//total sum in cart
let totalSumCount = function () {
  let price;
  let totalSum = 0;
  //find of total sum in cart
  $(".cosmetic__cart-price").each(function () {
    price = parseFloat($(this).text(), 10);
    totalSum += price;
  });
  //change number of total sum in cart
  $(".cosmetic__cart-total--sum").html(`${totalSum} <span>руб</span>`);
};
// cart count and price recount
let cartRecount = function (btnId, inputVal, dataPrice) {
  $(".cosmetic__cart-item").each(function () {
    if ($(this).data("id") == btnId) {
      let cartCount = $(this).find(".cosmetic__cart-count");
      cartCount.text(inputVal + " " + "шт");
      let cartPrice = $(this).find(".cosmetic__cart-price");
      cartPrice.text(inputVal * dataPrice + " " + "руб");
    } else {
      return;
    }
  });
};
