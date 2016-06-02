$(document).ready(function() {
  $('.icon-box').click(function(){
    var $Elem = $('#' + $(this).attr('id') + "-info");
    $('.icon-box').not($(this)).removeClass('icon-box-open');
    $('.info').not($Elem).removeClass('info-open');
    if($('.info').hasClass('info-open')){
    	$('.content').removeClass('content-open');
      $('.info').css("-webkit-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').css("-moz-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').css("-o-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').css("transition","height .25s, border 0s linear .21s, background-color .25s linear");
    }
    else{
      $('.info').css("-webkit-transition","height .25s, border 0s linear 0s, background-color .25s linear");
      $('.info').css("-moz-transition","height .25s, border 0s linear 0s, background-color .25s linear");
      $('.info').css("-o-transition","height .25s, border 0s linear 0s, background-color .25s linear");
      $('.info').css("transition","height .25s, border 0s linear 0s, background-color .25s linear");
    	$('.content').addClass('content-open');
    }
  	$(this).toggleClass('icon-box-open');
    $Elem.toggleClass('info-open');
    if($('.info').hasClass('info-open')){
      $('.info').not($Elem).css("-webkit-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').not($Elem).css("-moz-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').not($Elem).css("-o-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $('.info').not($Elem).css("transition","height .25s, border 0s linear .21s, background-color .25s linear");
    }
  });
});
