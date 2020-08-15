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
//price calc
$(".price__calc-row input").change(function () {
  let totalSum = 0;
  total = [];
  $(".price__calc-row input:checked").each(function () {
    total.push(Number($(this).val()));
  });
  let index = total.indexOf(Number($(this).val()));
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

/*$(".price__calc-row input").click(function () {
  debugger;
  if ($(this).prop("checked")) {
    debugger;
    $(this).prop("checked", false);
  } else {
    debugger;
    $(this).prop("checked", true);
  }
  $(this).prop("checked", true);
});*/

//calc for masage
$(".costMas__calc-row input").each(function () {
  let totalSum = 0;
  $(this).change(function () {
    let total = [];
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

//checkbox behave like radio
$(document).ready(function () {
  $("input:checkbox").change(function () {
    $("input:checkbox[name='" + $(this).attr("name") + "']")
      .not(this)
      .prop("checked", false);
  });
});
