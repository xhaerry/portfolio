$(document).ready(function(){
  // alert('test');

  const $sliderWrap=$('.sliderWrap'),
  $slides=$('.slides'),
  $slide=$slides.find('li'),
  $arrowWrap=$('.arrowWrap'),
  $prev=$arrowWrap.find('.prev'),
  $next=$arrowWrap.find('.next');

  let slideLeg=$slides.length,
  currentidx=0;

  function goToSlider(idx){
    $slides.stop().animate({left:(-100*idx)+'%'},1000);
    currentidx=idx;
    arrwHid();
  }; 

  //next,prev
  $arrowWrap.find('a').click(function(e){
    e.preventDefault();
    if($(this).hasClass('prev')){
      goToSlider(currentidx-1);
    }else{
      //next
      goToSlider(currentidx+1);
    }
  });
  function arrwHid(){
    if(currentidx===-0){
      $prev.addClass('hid');
    }else{$prev.removeClass('hid');};

    //next
    if(currentidx===slideLeg+1){
      $next.addClass('hid');
    }else{$next.removeClass('hid')}
  }

}); //e: jquery