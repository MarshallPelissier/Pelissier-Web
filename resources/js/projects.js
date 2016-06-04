$(document).ready(function() {
  $('.icon-box').click(function(){

    //transition timing functions
    // opening is instant
    // closing is delayed
    function this_delay(){
      $Elem.css("-webkit-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $Elem.css("-moz-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $Elem.css("-o-transition","height .25s, border 0s linear .21s, background-color .25s linear");
      $Elem.css("transition","height .25s, border 0s linear .21s, background-color .25s linear");
    }
    function this_instant(){
      $Elem.css("-webkit-transition","height .25s, border 0s linear .04s, background-color .25s linear");
      $Elem.css("-moz-transition","height .25s, border 0s linear .04s, background-color .25s linear");
      $Elem.css("-o-transition","height .25s, border 0s linear .04s, background-color .25s linear");
      $Elem.css("transition","height .25s, border 0s linear .04s, background-color .25s linear");
    }
    function others_delay(){
      $('.info').not($Elem).css("-webkit-transition","height .25s, border 0s linear .04s, background-color .25s linear");
      $('.info').not($Elem).css("-moz-transition","height .25s, border 0s linear .04s, background-color .25s linear");
      $('.info').not($Elem).css("-o-transition","height .25s, border 0s linear .04s, background-color .25s linear");
      $('.info').not($Elem).css("transition","height .25s, border 0s linear .04s, background-color .25s linear");
    }

    //variables. id (TN-#), info being opened, shortend icon text, full icon text.
    var id = $(this).attr('id');
    var $Elem = $('#' + id + "-info");
    var $short = $('#' + id + "-short");
    var $full = $('#' + id + "-full");
    //closing unused elements
    $('.icon-box').not($(this)).removeClass('icon-box-open');
    $('.info').not($Elem).removeClass('info-open');
    $('.short-text').not($short).show();
    $('.full-text').not($full).hide();

    if($('.info').hasClass('info-open')){
    	$('.content').removeClass('content-open');
      $('.icon-box').css("height","7vw");
      $('.icon-box').css("border-radius","5px");
      $('.icon-box').css("line-height","7vw");

      //transition timings. delay this element
      this_delay();
    }
    else{
      $('.icon-box').css("height","5vw");
      $('.icon-box').css("border-radius","0px");
      $('.icon-box').not($(this)).css("line-height","5.5vw");
      $(this).css("line-height","4.5vw");

      //transition timings. instant transition for this element
      this_instant();

    	$('.content').addClass('content-open');
    }

    //transition timings. delay all others
    others_delay();

    //toggling activated elements
  	$(this).toggleClass('icon-box-open');
    $Elem.toggleClass('info-open');
    $short.toggle();
    if($full.is(':visible')){
      $full.hide();
    }
    else{
      $full.fadeIn(750);
    };

    //transition timings. delay this element
    this_delay();

  });

});
