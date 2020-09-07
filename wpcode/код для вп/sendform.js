var nForm = false;
$(function () {
  "use strict";
  var action = $(".ajax-url").val();
  $("form").on("submit", function (e) {
    e.preventDefault();
    var formThis = $(this);
    var fd = new FormData(this);

    formThis.find(".btn").attr({
      disabled: "true",
    });
    var dopT3 = "";
    if (formThis.find('input[name="formname"]').val() === "cartForm") {
      formThis.find(".cosmetic__cart-item").each(function (index, el) {
        dopT3 +=
          $(this).find(".cosmetic__cart-item--title").text().trim() +
          " -  " +
          $(this).find(".cosmetic__cart-count").text().trim() +
          " -  " +
          $(this).find(".cosmetic__cart-price").text().trim() +
          " , ";
      });
      fd.append("cprice", dopT3);
    } else if (formThis.find('input[name="formname"]').val() === "priceForm") {
      $(".price__calc-row")
        .find("input")
        .each(function (index, el) {
          if ($(this).prop("checked")) {
            dopT3 +=
              $(this)
                .parents(".price__calc-row")
                .find(".pct-js")
                .text()
                .trim() +
              " -  " +
              $(this).val() +
              "руб , ";
          }
        });
      fd.append("price", dopT3);

      var dopT4 = $(".price__calc-discount--js").text().trim();
      fd.append("priceAll", dopT4);
    } else if (formThis.find('input[name="formname"]').val() === "formFirst") {
      $(".main__popup-complete").addClass("show");
    } else if (formThis.find('input[name="formname"]').val() !== "formFirst") {
      $(".popup__leave").addClass("show");
    }
    // 		console.log(dopT4);

    $(".main__popup_background").addClass("show");
    $("html").addClass("stop");
    //$(".popup__leave").addClass("show");
    formThis.find(".btn").removeAttr("disabled");
    $("form").trigger("reset");

    $.ajax({
      url: action,
      type: "POST",
      contentType: false,
      processData: false,
      data: fd,
      success: function (msg) {},
    });
  });
});

// ---------------------

function simulate(element, eventName) {
  var options = extend(defaultOptions, arguments[2] || {});
  var oEvent,
    eventType = null;

  for (var name in eventMatchers) {
    if (eventMatchers[name].test(eventName)) {
      eventType = name;
      break;
    }
  }

  if (!eventType)
    throw new SyntaxError(
      "Only HTMLEvents and MouseEvents interfaces are supported"
    );

  if (document.createEvent) {
    oEvent = document.createEvent(eventType);
    if (eventType == "HTMLEvents") {
      oEvent.initEvent(eventName, options.bubbles, options.cancelable);
    } else {
      oEvent.initMouseEvent(
        eventName,
        options.bubbles,
        options.cancelable,
        document.defaultView,
        options.button,
        options.pointerX,
        options.pointerY,
        options.pointerX,
        options.pointerY,
        options.ctrlKey,
        options.altKey,
        options.shiftKey,
        options.metaKey,
        options.button,
        element
      );
    }
    element.dispatchEvent(oEvent);
  } else {
    options.clientX = options.pointerX;
    options.clientY = options.pointerY;
    var evt = document.createEventObject();
    oEvent = extend(evt, options);
    element.fireEvent("on" + eventName, oEvent);
  }
  return element;
}

function extend(destination, source) {
  for (var property in source) destination[property] = source[property];
  return destination;
}

var eventMatchers = {
  HTMLEvents: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
  MouseEvents: /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/,
};
var defaultOptions = {
  pointerX: 0,
  pointerY: 0,
  button: 0,
  ctrlKey: false,
  altKey: false,
  shiftKey: false,
  metaKey: false,
  bubbles: true,
  cancelable: true,
};
