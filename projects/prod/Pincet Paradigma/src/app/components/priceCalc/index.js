//calc for dep

//clear inputs and prices
$(".clear").click(function () {
  total = [];
  $(".price__calc-total--js").html(0 + "руб");
  $(".price__calc-discount--js").html(0 + "руб");
  $(".price__calc-row input").each(function () {
    $(this).prop("checked", false);
  });
});
//calc for masage
let total = [];
$(".costMas__calc-row input").each(function () {
  let totalSum = 0;
  $(this).change(function () {
    total = [];
    $(".costMas__calc-row input:checked").each(function () {
      total.push(Number($(this).val()));
    });
    function totalSumFunc() {
      for (let i = 0; i < total.length; i++) {
        totalSum += total[i];
      }
    }
    totalSumFunc();
    $(".price__calc-total--js").html(totalSum + "руб");
    let discount = totalSum - (totalSum / 100) * 15;
    discount = discount.toFixed(1);
    $(".price__calc-discount--js").html(discount + "руб");
    totalSum = 0;
  });
});
//price dep
let totalSum = 0;
$("input:checkbox").on("change input", function () {
  $("input:checkbox[name='" + $(this).attr("name") + "']")
    .not(this)
    .prop("checked", false);
});
$(".price__calc-main input").on("change input", function () {
  totalSum = 0;
  $(".price__calc-main input:checked").each(function () {
    totalSum += Number($(this).val());
  });
  $(".price__calc-total--js").html(totalSum + "руб");
  let discount = totalSum - (totalSum / 100) * 15;
  discount = discount.toFixed(1);
  $(".price__calc-discount--js").html(discount + "руб");
});
