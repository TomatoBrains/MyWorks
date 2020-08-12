//calc for dep
let total = [];
//clear inputs and prices
$(".clear").click(function () {
  total = [];
  $(".price__calc-total--js").html(0 + "руб");
  $(".price__calc-discount--js").html(0 + "руб");
  $(".price__calc-row input").each(function () {
    $(this).prop("checked", false);
  });
});
$(".price__calc-row input").each(function () {
  let totalSum = 0;
  $(this).change(function () {
    total = [];
    $(".price__calc-row input:checked").each(function () {
      total.push(Number($(this).val()));
    });
    console.log(total);
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
//calc for masage
$(".costMas__calc-row input").each(function () {
  let totalSum = 0;
  $(this).change(function () {
    let total = [];
    $(".costMas__calc-row input:checked").each(function () {
      total.push(Number($(this).val()));
    });
    console.log(total);
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

//checkbox behave like radio
$(document).ready(function () {
  $("input:checkbox").change(function () {
    $("input:checkbox[name='" + $(this).attr("name") + "']")
      .not(this)
      .prop("checked", false);
  });
});
