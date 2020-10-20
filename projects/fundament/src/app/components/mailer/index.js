/* var nForm = false;
$(function () {
	"use strict";
	var action = "./assets/mailer/send.php";
	$("form").on("submit", function (e) {
		e.preventDefault();
		var formThis = $(this);
		var fd = new FormData(this);

		formThis.find(".btn").attr({
			disabled: "true",
		});

		// var dopT3 = '';
		// var dopT4 = '';

		// formThis.find('input[name="qw3"]').each(function(index, el) {
		//   if($(this).prop('checked')){
		//     dopT3 += $(this).val() + ', ';
		//   }
		// });
		// fd.append('qw3', dopT3);

		// formThis.find('input[name="qw4"]').each(function(index, el) {
		//   if($(this).prop('checked')){
		//     dopT4 += $(this).val() + ', ';
		//   }
		// });
		// fd.append('qw4', dopT4);

		$('.popup-background').fadeIn();
		$('.endForm').fadeIn();
		$("html").addClass("overflowHidden");
		$('.form-popup').fadeOut();
		$('.form-popupMainBtn').fadeOut();


		$.ajax({
			url: action,
			type: "POST",
			contentType: false,
			processData: false,
			data: fd,
			success: function (msg) {
				formThis.find(".btn").removeAttr("disabled");
			},
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
}; */
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
    if (formThis.find('input[name="formname"]').val() === "pdf") {
      var link = document.createElement("a");
      link.setAttribute("href", $(".pdf-pdf").val());
      link.setAttribute("target", "_blank");
      link.setAttribute("download", "");
      if (navigator.userAgent.indexOf("Mac") > 0) {
        window.location = $(".pdf-pdf").val();
      } else {
        simulate(link, "click");
      }
      $(".popup-background").fadeIn();
      $(".endForm").fadeIn();
      $("html").addClass("overflowHidden");
      $(".form-popup").fadeOut();
      $(".form-popupMainBtn").fadeOut();
      $(".more").fadeOut();
    } else {
      $(".popup-background").fadeIn();
      $(".endForm").fadeIn();
      $("html").addClass("overflowHidden");
      $(".form-popup").fadeOut();
      $(".form-popupMainBtn").fadeOut();
      $(".more").fadeOut();
    }
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
