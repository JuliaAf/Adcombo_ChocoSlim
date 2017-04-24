$(document).ready(function(){

  var clock = $('.counter-clock').FlipClock({
    clockFace: 'Counter',
    autoStart: true,
    minimumDigits: 2,
    count:22,
    interval:7000/*раз в 7 сек*/
  });

  var target = "99"; //Дата до которой нужен тайме
  clock.setTime(17); //Устанавливаем нужное время в секундах
      clock.start(); //Запускаем отсчет


  /*scroll*/
  $('.toform').click(function(e) {
  e.preventDefault();
  var a = $('.js_submit'),b = a.closest('form');
  if($('form#toform').length) a = $('#toform .js_submit'),b = a.closest('form#toform');
  if(b.length && a.is(':visible')){
  $("html,body").animate({scrollTop: b.offset().top}, 1000);
  		}
  return false;
  });

});//ready-end
