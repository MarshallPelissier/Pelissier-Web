$(document).ready(function() {

  var icon_height;
  var icon_height_small;
  var icon_border_radius;
  var icon_line_height;
  var icon_line_height_selected;
  var icon_line_height_small;

  var mobile_clicked = false;

  function icon_css(){
    icon_height = '12vmin';
    icon_height_small = '7vmin';
    icon_line_height = '12vmin';
    icon_line_height_selected = '6vmin';
    icon_line_height_small = '7.5vmin';
  };

  function icon_css_mobile(){
    icon_height = '14vmin';
    icon_height_small = '10vmin';
    icon_line_height = '14vmin';
    icon_line_height_selected = '9vmin';
    icon_line_height_small = '11vmin';
  };

  function icon_css_games_mobile(){
    icon_height = '12vmin';
    icon_line_height = '12vmin';
  }

  function mobile_view(){
    $('*').toggleClass('mobile');

    if ($('*').hasClass('mobile')){
      icon_css_mobile();
      if($(document).find('title').text() === 'Games'){
        icon_css_games_mobile();
      }
    }
    else{
      icon_css();
    }
    if($('.info').hasClass('info-open')){
      $('.icon-box').css('height',icon_height_small);
      $('.icon-box').css('border-radius','0px');
      $('.icon-box').css('line-height',icon_line_height_small);
      $('.icon-box-open').css('line-height',icon_line_height_selected);
    }
    else{
      $('.icon-box').css('height',icon_height);
      $('.icon-box').css('border-radius','5px');
      $('.icon-box').css('line-height',icon_line_height);
    }
  };

  function dark_view(){
      $('*').toggleClass('dark');
  };

  function check_mobile(){
    //change to mobile view based on media query
    if (($('.buffer').css('float') == 'right') && !($('*').hasClass('mobile')) ){
      mobile_view();
    }
    //doesnt allow change back if mobile button has been clicked
    else if (!($('.buffer').css('float') == 'right') && ($('*').hasClass('mobile')) && !mobile_clicked){
      mobile_view();
    }
    //allows for mobile when the size isnt correct but the button has been pressed;
    else if (!($('.buffer').css('float') == 'right') && !($('*').hasClass('mobile')) && mobile_clicked){
      mobile_view();
    }
  };

  check_mobile();
  $(window).resize(check_mobile);

  $('.icon-box').click(function(){

    //transition timing functions
    // opening is instant
    // closing is delayed
    function this_delay(){
      $Elem.css('-webkit-transition','height .25s, border 0s linear .21s, padding .15s');
      $Elem.css('-moz-transition','height .25s, border 0s linear .21s, padding .15s');
      $Elem.css('-o-transition','height .25s, border 0s linear .21s, padding .15s');
      $Elem.css('transition','height .25s, border 0s linear .21s, padding .15s');
    }
    function this_instant(){
      $Elem.css('-webkit-transition','height .25s, border 0s linear .04s, padding .15s');
      $Elem.css('-moz-transition','height .25s, border 0s linear .04s, padding .15s');
      $Elem.css('-o-transition','height .25s, border 0s linear .04s, padding .15s');
      $Elem.css('transition','height .25s, border 0s linear .04s, padding .15s');
    }
    function others_delay(){
      $('.info').not($Elem).css('-webkit-transition','height .25s, border 0s linear .04s, padding .15s');
      $('.info').not($Elem).css('-moz-transition','height .25s, border 0s linear .04s, padding .15s');
      $('.info').not($Elem).css('-o-transition','height .25s, border 0s linear .04s, padding .15s');
      $('.info').not($Elem).css('transition','height .25s, border 0s linear .04s, padding .15ss');
    }
    //variables. id (TN-#), info being opened, shortend icon text, full icon text.
    var id = $(this).attr('id');
    var $Elem = $('#' + id + '-info');
    var $short = $('#' + id + '-short');
    var $full = $('#' + id + '-full');
    if ($('*').hasClass('mobile')){
      icon_css_mobile();
      if($(document).find('title').text() === 'Games'){
        icon_css_games_mobile();
      }
    }
    else{
      icon_css();
    }
    //closing unused elements
    $('.icon-box').not($(this)).removeClass('icon-box-open');
    $('.info').not($Elem).removeClass('info-open');
    $('.short-text').not($short).show();
    $('.full-text').not($full).hide();
    if($('.info').hasClass('info-open')){
    	$('.content').removeClass('content-open');
      $('.icon-box').css('height',icon_height);
      $('.icon-box').css('border-radius','5px');
      $('.icon-box').css('line-height',icon_line_height);

      //transition timings. delay this element
      this_delay();
    }
    else{
      $('.icon-box').css('height',icon_height_small);
      $('.icon-box').css('border-radius','0px');
      $('.icon-box').not($(this)).css('line-height',icon_line_height_small);
      $(this).css('line-height',icon_line_height_selected);

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
  $('.menu-dark').click(function(){
    dark_view();
  });
  $('.menu-view').click(function(){
    //toggle mobile_clicked
    $(this).toggleClass('menu-botton-clicked');
    if (mobile_clicked){
      mobile_clicked = false
    }
    else{
      mobile_clicked = true;
    }
    check_mobile();
  });
});
