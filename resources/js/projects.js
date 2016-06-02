$(document).ready(function() {
  $('.icon-box').click(function(){
    var $Elem = $('#' + $(this).attr('id') + "-info");
    $('.icon-box').not($(this)).removeClass('icon-box-open');
    $('.info').not($Elem).removeClass('info-open');
    if($('.info').hasClass('info-open')){
    	$('.content').removeClass('content-open');
    }
    else{
    	$('.content').addClass('content-open');
    }
  	$(this).toggleClass('icon-box-open');
    $Elem.toggleClass('info-open');
  });
});
