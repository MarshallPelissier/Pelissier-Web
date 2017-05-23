$(document).ready(function(){

  $('.button-main').click(function(){
    $('#Main').removeClass('hide');
    $('#Game').addClass('hide');
    $('#Project').addClass('hide');
  });

  $('.button-project').click(function(){
    $('#Main').addClass('hide');
    $('#Game').addClass('hide');
    $('#Project').removeClass('hide');
  });

  $('.button-game').click(function(){
    $('#Main').addClass('hide');
    $('#Game').removeClass('hide');
    $('#Project').addClass('hide');
  })
});
