$(document).ready(function() {
  $('.icon-box').click(function(){
    var id = $(this).attr('id');
    var $Elem = $('#' + id + "-info");
    var $short = $('#' + id + "-short");
    var $full = $('#' + id + "-full");
    $('.icon-box').not($(this)).removeClass('icon-box-open');
    $('.info').not($Elem).removeClass('info-open');
    $('.short-text').not($short).show();
    $('.full-text').not($full).hide();

    if($('.info').hasClass('info-open')){
    	$('.content').removeClass('content-open');
      $('.icon-box').css("height","7vw");
      $('.icon-box').css("line-height","6.5vw");

      //transition timings
      $('.info').css("-webkit-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').css("-moz-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').css("-o-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').css("transition","height .25s, border 0s linear .21s, background-color .25s linear");

    }
    else{
      $('.icon-box').css("height","5vw");
      $('.icon-box').css("line-height","4.75vw");

      $('.info').css("-webkit-transition","height .25s, border 0s linear 0s, background-color .25s linear");
      $('.info').css("-moz-transition","height .25s, border 0s linear 0s, background-color .25s linear");
      $('.info').css("-o-transition","height .25s, border 0s linear 0s, background-color .25s linear");
      $('.info').css("transition","height .25s, border 0s linear 0s, background-color .25s linear");
    	$('.content').addClass('content-open');
    }
  	$(this).toggleClass('icon-box-open');
    $Elem.toggleClass('info-open');
    $short.toggle();
    if($full.is(':visible')){
      $full.hide();
    }
    else{
      $full.fadeIn(750);
    };

    if($('.info').hasClass('info-open')){
      $('.info').not($Elem).css("-webkit-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').not($Elem).css("-moz-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').not($Elem).css("-o-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').not($Elem).css("transition","height .25s, border 0s linear .21s, background-color .25s linear");
    }
  });

});
