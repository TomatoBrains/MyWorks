
var number = 0;
var maxNumber = $(".test-item").length;
var $element = $(".test-item").find("input, select, textarea");
var btnPrev = $(".quiz__prev");
var btnNext = $('.quiz__next');
var isValid;
var dataBlock;
var activeSlede = [];

for(var i = 0; i< maxNumber; i++){
  activeSlede[i] = false;
}

$(".test-num-current").text(number + 1);
$(".test-num-all").text( maxNumber - 2);

$element.on('change input', function (e) {
  var value = $(this).val().trim();

  isValid = value !== "";
  btnActive(!isValid);

});

function btnActive(isValid) {
  if(number === 0){
    btnPrev.prop('disabled', 'false');
    btnPrev.hide();
    btnNext.prop('disabled', isValid);
    $('.btn-lbs').hide();
  }else{
    btnPrev.fadeIn();
    btnPrev.prop('disabled', false);
    $('.btn-lbs').hide();
    if(activeSlede[number] === true || isValid === false){
      btnNext.prop('disabled', false);
      $('.btn-lbs').hide();
    }else{
      btnNext.prop('disabled', true);
      $('.btn-lbs').show();
    }
    
  }

}
// btnPrev.hide();

var lbs = false;
$('.btn-lbs').on('click', function(event) {
  event.preventDefault();
  $(this).addClass('act');
  
  if(!lbs){
    setTimeout(function(){
      $('.btn-lbs').removeClass('act');
      lbs = false;
    }, 3000);
    lbs = true;
  }

});

$("input[name='qw8']").on('change, input', function() {

  if($(this).hasClass('vit')){
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон в Viber');
    $('.eml').hide();
  }else if($(this).hasClass('wat')){
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон в WhatsApp');
    $('.eml').hide();
  }else if($(this).hasClass('teg')){
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон в Telegram');
    $('.eml').hide();
  }else if($(this).hasClass('phn')){
    $('.inp-enp-ph').attr('placeholder', '*Ваш телефон ');
    $('.eml').fadeIn();
  }

});
// sidebar

  function progress(num){
     var testCircle= ".test-circle-" + (num) ;
     var testblock= ".test-block-" + (num) ;
    $(testCircle).addClass('test-circle-active');
    $(testblock).addClass('test-block-active');
  }
  progress(0);


// btn

function btnClick() {
btnPrev.on('click', function(event) {
  event.preventDefault();
  --number;

  $('.test-item').hide();
  $('.test-item').eq(number).fadeIn(1000);
  $(".test-wh-wrap").hide();
  $(".test-wh-wrap").eq(number).fadeIn(500);
  btnActive(!isValid);


  animateTop ();
});

$('input[name="qw1"], input[name="qw2"] ,input[name="qw3"] ,input[name="qw4"], input[name="qw5"]').on('click', function(event) {

    activeSlede[number] = true;
    ++number;
    
    btnActive(!isValid);

    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
      $('.btn-lbs').hide();
    }else{
      btnNext.prop('disabled', true);
      $('.btn-lbs').show();
    }

    if(number === maxNumber - 1){
      $(".test-form-right").hide();
      $(".test-form-bg, .hand").fadeIn(500);
      $(".test-item").hide();
      $(".test-item").eq(number).fadeIn(600);

    }else{
      $(".test-item").hide();
      $(".test-item").eq(number).fadeIn(600);
      $(".test-wh-wrap").hide();
      $(".test-wh-wrap").eq(number).fadeIn(500);
     }
    progress(number);

    animateTop ();
    
  });
  btnNext.on('click', function(event) {
    event.preventDefault();
    activeSlede[number] = true;
    ++number;
    
    btnActive(!isValid);

    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
      $('.btn-lbs').hide();
    }else{
      btnNext.prop('disabled', true);
      $('.btn-lbs').show();
    }

    if(number === maxNumber - 1){
      $(".test-form-right").hide();
      $(".test-form-bg, .hand").fadeIn(500);
      $(".test-item").hide();
      $(".test-item").eq(number).fadeIn(600);

    }else{
      $(".test-item").hide();
      $(".test-item").eq(number).fadeIn(600);
      $(".test-wh-wrap").hide();
      $(".test-wh-wrap").eq(number).fadeIn(500);
     }
    progress(number);

    animateTop ();
    
  });


}
btnClick();

function animateTop (eq){
  var elem = $('.test-scroll-js');
  var top = elem.offset().top - 15;
  $('body,html').animate({scrollTop: top}, 400);
}


$.fn.hasAttr = function(name) {  
   return this.attr(name) !== undefined;
};





 var nForm = false;
  $(function(){
    'use strict';
    var action = './assets/mailer/send.php';
    $('form').on('submit', function(e){
      e.preventDefault();
      var formThis = $(this);
      var fd = new FormData( this );

      var dopT3 = '';
      var dopT4 = '';
      
      formThis.find('.btn').attr({
        'disabled': 'true'
      });



        formThis.find('input[name="qw3"]').each(function(index, el) {
          if($(this).prop('checked')){
            dopT3 += $(this).val() + ', ';
          }
        });
        fd.append('qw3', dopT3);

        formThis.find('input[name="qw4"]').each(function(index, el) {
          if($(this).prop('checked')){
            dopT4 += $(this).val() + ', ';
          }
        });
        fd.append('qw4', dopT4);

        // if(formThis.find('input[name="formname"]').val() === "price" ){
        //     var link = document.createElement('a');
        //     link.setAttribute('href', 'docs/price.pdf');
        //     link.setAttribute('target', "_blank");
        //     link.setAttribute('download','');

        //     if(navigator.userAgent.indexOf('Mac') > 0){
        //       window.location = 'docs/price.pdf';
        //     }else{
        //       simulate( link, "click");
        //     }

        //     $('html').addClass('stop');
        //     $(".overlay").fadeOut();
        //     $("#modal-thank").fadeIn();
        //     formThis.find('.btn').removeAttr('disabled');

        //   }else if(formThis.find('input[name="formname"]').val() === "test"){

            
        //     formThis.find('input').attr({
        //       'disabled': 'true',
        //     });
        //     formThis.find('button').attr({
        //       'disabled': 'true',
        //     });

        //     $(".overlay").fadeOut();
        //     $('html').addClass('stop');
        //     $("#modal-thank").fadeIn();
        //   }else if(formThis.find('input[name="formname"]').val() === "proj"){

        //    // $('.mn-right-it-1').show();
        //    // $('.mn-right-it-2').hide();
        //    // $('.mn-right-it-3').fadeIn();
        //   }else{
        //     $(".overlay").fadeOut();
        //     $('html').addClass('stop');
        //     $("#modal-thank").fadeIn();
        //     formThis.find('.btn').removeAttr('disabled');

        //   }

          // formThis.find('.btn').removeAttr('disabled');
          // $('form').trigger('reset');
      
      $.ajax({
        url: action,
        type: 'POST',
        contentType: false, 
        processData: false, 
        data: fd,
        success: function(msg){

      $('form').trigger('reset');
      // window.location.href = "http://profhelp.com.ua";
        window.location.replace("./thanks.html");
        },

      });
    });
 });




  // ---------------------

  function simulate(element, eventName)
  {
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;

    for (var name in eventMatchers)
    {
      if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
      throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
      oEvent = document.createEvent(eventType);
      if (eventType == 'HTMLEvents')
      {
        oEvent.initEvent(eventName, options.bubbles, options.cancelable);
      }
      else
      {
        oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
          options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
          options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
      }
      element.dispatchEvent(oEvent);
    }
    else
    {
      options.clientX = options.pointerX;
      options.clientY = options.pointerY;
      var evt = document.createEventObject();
      oEvent = extend(evt, options);
      element.fireEvent('on' + eventName, oEvent);
    }
    return element;
  }

  function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
  }

  var eventMatchers = {
    'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
    'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
  }
  var defaultOptions = {
    pointerX: 0,
    pointerY: 0,
    button: 0,
    ctrlKey: false,
    altKey: false,
    shiftKey: false,
    metaKey: false,
    bubbles: true,
    cancelable: true
  }

  // var closeMod = false;
  //    $(document).mouseleave(function(event) {
  //        event = event || window.event;
  //        if (event.clientY < 0 || event.clientY < 3) {
  //            if (!closeMod) {
  //                $('#modal-wait').fadeIn();
  //                $('html').addClass('stop');
  //                closeMod = true;
  //            }

  //        }
  //    });


