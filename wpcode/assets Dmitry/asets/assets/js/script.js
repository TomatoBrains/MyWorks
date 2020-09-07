
$(document).ready(function($) {

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

        if(formThis.find('input[name="formname"]').val() === "price" ){
            var link = document.createElement('a');
            link.setAttribute('href', 'docs/price.pdf');
            link.setAttribute('target', "_blank");
            link.setAttribute('download','');

            if(navigator.userAgent.indexOf('Mac') > 0){
              window.location = 'docs/price.pdf';
            }else{
              simulate( link, "click");
            }

            $('html').addClass('stop');
            $(".overlay").fadeOut();
            $("#mdowns").fadeIn();
            setTimeout(function(){
                $("#mdowns").fadeOut();
                $('html').removeClass('stop');
                 
              }, 2000);
            formThis.find('.btn').removeAttr('disabled');

          }else if(formThis.hasClass('btn-free-1')){
            $('.iph').val($('.iph-one').val());
            $('.iem').val($('.iem-one').val());
            $('.modal-conten__one').hide();
            $('.modal-conten__two').fadeIn();
            formThis.find('.btn').removeAttr('disabled');
          }else if(formThis.hasClass('btn-free-2')){
            $(".overlay").fadeOut();
            $('html').addClass('stop');
            $("#modal-bonus").fadeIn();
            formThis.find('.btn').removeAttr('disabled');

            $('.modal-conten__one').show();
            $('.modal-conten__two').hide();
          } 
          else{
              $(".overlay").fadeOut();
              $('html').addClass('stop');
              $("#modal-bonus").fadeIn();
              formThis.find('.btn').removeAttr('disabled');
              $('form').trigger('reset');
              console.log('jfjjf');
            }

          // formThis.find('.btn').removeAttr('disabled');
          $('form').trigger('reset');
          if(formThis.hasClass('main-form')){
            forms = true;
          }
      $.ajax({
        url: action,
        type: 'POST',
        contentType: false, 
        processData: false, 
        data: fd,
        success: function(msg){
      

        },

      });
    });
 });

var forms = false;
$('.mjs').on('click', function(e) {
  e.preventDefault();
  if(!forms){
    
    $(this).parents('.main-form').find('input[name="phone"]').focus();
    // forms = true;
  }else{
    $(this).remove();

  }
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


  $('.program-weeks-list__item').on('click', function(event) {
    event.preventDefault();
    if(!$(this).hasClass('active')){
      $('.program-weeks-list__item').removeClass('active');
      $(this).addClass('active');
  
      $('.program-desc__cont').hide().eq($(this).index()).fadeIn();

      if($(window).width() < 767){
        var id = $('.program-desc').offset().top;
        $('body,html').animate({scrollTop: id}, 300);
      }
    }
  });

  $('.program__tab').on('click', function(event) {
    event.preventDefault();
    if(!$(this).hasClass('active')){
      $('.program__tab').removeClass('active');
      $(this).addClass('active');
  
      $('.cont').hide().eq($(this).index()).fadeIn();
    }
  });

  $('.modal-tabs__item').on('click', function(event) {
    event.preventDefault();
    if(!$(this).hasClass('active')){
      $('.modal-tabs__item').removeClass('active');
      $(this).addClass('active');
  
      $('.modal__content').hide().eq($(this).index()).fadeIn();
    }
  });
  



$('.close, .back-close, .cls-js, .cls-jsd, .modal__deny').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('close-nav')){
    $(".nav__wrap").removeClass('active');
    $('.nav-overlay').fadeOut();
  }

    if($(this).hasClass('cln')){
      $('.mn-right-it-1').show();
     $('.mn-right-it-2').hide();
     $('.mn-right-it-3').hide();
    }
  
  $(".overlay").fadeOut();
  $("html").removeClass('stop');
});

$('.burger__wrap').on('click', function(event) {
  event.preventDefault();
  $('.nav__wrap').addClass('active');
  $('.nav-overlay').fadeIn();
});

//  $('.overlay').not('#modal-page').mouseup(function(e){
//     var container = $('.modal-wrap');
//     if (container.has(e.target).length === 0 && !container.is(e.target)){
//         $('html').removeClass('stop');
//         $('.overlay').fadeOut();
//          $('.mn-right-it-1').show();
//         $('.mn-right-it-2').hide();
//         $('.mn-right-it-3').hide();
//     }
// });


// Получить консультацию


// консультация
$('.btn-cb-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-dogovor').fadeIn();
});

$('.polit-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#politics').fadeIn();
});


$('.btn-js-1').on('click', function(event) {
  event.preventDefault();
  var title = $(this).parents('.portfolio-slider__item').find('.tlt-js-1').text().trim();

  $('.clb-tlt').val(title);
  $('html').addClass('stop');
  $('#modal-callback').fadeIn();
});

$('.btn-js-2').on('click', function(event) {
  event.preventDefault();
  var title = $(this).parents('.price-item__show').find('.tlt-js-2').text().trim();

  $('.clp-prc').val(title);
  $('html').addClass('stop');
  $('#modal-price').fadeIn();
});

  // d = new Date();
  // monthA = 'января,февраля,марта, апреля, мая, июня, июля, августа, сентября, октября, ноября, декабря'.split(',');
  // d.setDate(d.getDate() + 2);
  // $('.date-js').text( d.getDate() +' ' + monthA[d.getMonth()] + ' ' + d.getFullYear());





$(".title").not('.title-first').each(anime);
$(".t-min, .t-ss, .text24 , .t-min, .title-lg, .import-bf").not('.title-first').each(anime);
// $(".title-descr").not('.subtitle-first').each(anime);
function anime(anim){
  // var offsetTop = thisTitle.offset().top - $(window).height() - 10;
  var thisTitle = $(this);
  $(window).scroll(function(event) {
     var offsetTop = thisTitle.offset().top - $(window).height() - 10;
    if($(document).scrollTop() > offsetTop ){
      thisTitle.addClass('fade_in');
    }
  });
}



if($('body').find('.seob__btn').length > 0){
      $('.seob__btn').on('click', function(event) {
        event.preventDefault();

        if($(this).hasClass('open')){

          $(this).parents('.container-big').find('.seob__text').addClass('act');
          $(this).removeClass('open');
        }else{
          $(this).addClass('open');

          var heigtText = $(this).parents('.container-big').find('.seob__text-wrap').outerHeight();

           $(this).parents('.container-big').find('.seob__text').removeClass('act').removeAttr('style').css({
           height: heigtText,
         });


        }

      });
    }





$(".link-scr").on("click", function (event) {
  var id = $(this).attr('href'), top = $(id).offset().top;
  $('body,html').animate({scrollTop: top}, 600);
});


});



if($(window).width() < 567){

  $('.problem-list__item').each(function(index, el) {
    if(index > 3){
      $(this).hide();
    }
  });

}

$('.link-problems-js').on('click', function(event) {
  event.preventDefault();
  if(!$(this).hasClass('show')){
    $(this).addClass('show').text('Скрыть');
    $('.problem-list__item').fadeIn();
  }else{
    var tr = 7;
    $(this).removeClass('show').text('Расскрыть все проблемы и найти свою');
    if($(window).width() < 567){
      tr = 3;
    }else{
      tr = 7;
    }
    $('.problem-list__item').each(function(index, el) {
      if(index > tr){
        $(this).hide();
      }
    });
  }
});







// $('.tasks-list__item').


$(".tasks-list").each(freeSection);
    function freeSection(anim){
      // var offsetTop = thisTitle.offset().top - $(window).height() - 10;
      var thisTitle = $(this);
      var lb = false;
      var dlt = 300;
      $(window).scroll(function(event) {
         var offsetTop = thisTitle.offset().top - $(window).height() + 20;
        if($(document).scrollTop() > offsetTop ){
          if(!lb){
            $('.tasks-list__item').each(function(index, el) {
              setTimeout(function(){
                 $('.tasks-list__item').eq(index).addClass('active');
                 // console.log('2321312321')
              }, dlt);
              dlt += 350;
            });

            setTimeout(function(){
               $('.tasks-list__ten').addClass('active');
            }, dlt + 300);

            lb = true;
          }
        }
      });
    }



// m1
$('.m1-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-do').fadeIn();
});
// m2
$('.m2-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-dop').fadeIn();
});
// m3
$('.m3-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-result').fadeIn();
});







// Разработаем предложение
$('.mof-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-offer').fadeIn();
});

// Бесплатно
$('.mfree-js').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-free').fadeIn();
});


$('.cases__link').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-free').fadeIn();
});

$('.program__btn').on('click', function(event) {
  event.preventDefault();
  $('html').addClass('stop');
  $('#modal-offer').fadeIn();
});

$(".link-f").on("click", function (event) {
  event.preventDefault();
  var id = $("#cases").offset().top;
  $('body,html').animate({scrollTop: id}, 600);
});

$(".link-case").on("click", function (event) {
  event.preventDefault();
  var id = $("#case-garant").offset().top;
  $('body,html').animate({scrollTop: id}, 600);
});


$('.cases__more').on('click', function(event) {
    event.preventDefault();
      if(!$(this).hasClass('show')){
        $(this).addClass('show').text('Скрыть');
        $('.cases__item').fadeIn();
      }else{
        $(this).removeClass('show').text('Показать ещё');
        $(this).parent().parent().find('.cases__item').each(function(index, el) {

          if(index > 2){
            $(this).hide();
          }
        });

        var id = $("#cases").offset().top;
        $('body,html').animate({scrollTop: id}, 600);
      }
  });




// Бесплатно


var cookiesTest2 = get_cookie ( "test2" );
  if(cookiesTest2 !== '' && cookiesTest2 !== null){
    // return false;
  }else{
   var closeMod = false;
   $(document).mouseleave(function(event) {
       event = event || window.event;
       if (event.clientY < 0 || event.clientY < 3) {
           if (!closeMod) {

            console.log(cookiesTest2);
               $('html').addClass('stop');
               $('#modal-free').fadeIn();
               closeMod = true;


               var date2 = new Date();
               date2.setDate(date2.getDate() + 7);
              date2 = date2.toUTCString();
              document.cookie = "test2=1;expires=" + date2;
           }

       }
   });
  
  }



function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}


var cookiesTest3 = get_cookie ( "test3" );
  if(cookiesTest3 !== '' && cookiesTest3 !== null){
    // return false;
  }else{

      setTimeout(function(){
        $('html').addClass('stop');
         $('#modal-words').fadeIn();
      }, 20000);
       var date3 = new Date();
       date3.setDate(date3.getDate() + 7);
      date3 = date3.toUTCString();
      document.cookie = "test3=1;expires=" + date3;
           
  
  }
  
   $(".nav a").on("click", function (event) {
      if($(this).parents(".nav").hasClass('active')){
          $(".nav").removeClass("active");
          $('html').removeClass('stop');
      }else{}
      var id = $(this).attr('href'), top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1000);
  });

  $(".visa-scroll").on("click", function (event) {
    var id = $(this).attr('href'), top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});