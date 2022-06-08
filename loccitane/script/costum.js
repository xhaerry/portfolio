$(document).ready(function(){
  // alert('test');

  //gnb
  $('.gnb>li:nth-child(3)').mouseenter(function(){
    $(this).find('.sub').stop().slideDown()
    $('.w1').stop().slideDown()
  }).mouseleave(function(){
    $('.w1 ,.gnb .sub').stop().slideUp()
  })
  $('.gnb>li:nth-child(4)').mouseenter(function(){
    $(this).find('.sub').stop().slideDown()
    $('.w2').stop().slideDown()
  }).mouseleave(function(){
    $('.w2 ,.gnb .sub').stop().slideUp()
  })
  $('.gnb>li:nth-child(5)').mouseenter(function(){
    $(this).find('.sub').stop().slideDown()
    $('.w3').stop().slideDown()
  }).mouseleave(function(){
    $('.w3 ,.gnb .sub').stop().slideUp()
  })
  $('.gnb>li:nth-child(6)').mouseenter(function(){
    $(this).find('.sub').stop().slideDown()
    $('.w4').stop().slideDown()
  }).mouseleave(function(){
    $('.w4 ,.gnb .sub').stop().slideUp()
  })
  $('.gnb>li:nth-child(7)').mouseenter(function(){
    $(this).find('.sub').stop().slideDown()
    $('.w5').stop().slideDown()
  }).mouseleave(function(){
    $('.w5 ,.gnb .sub').stop().slideUp()
  })
  $('.gnb>li:nth-child(8)').mouseenter(function(){
    $(this).find('.sub').stop().slideDown()
    $('.w6').stop().slideDown()
  }).mouseleave(function(){
    $('.w6 ,.gnb .sub').stop().slideUp()
  })

  //main
  const $sliderWrap=$('.sliderWrap'),
  $sliders=$sliderWrap.find('.sliders'),
  $slider=$sliders.find('li'),
  $arrowWrap=$sliderWrap.find('.arrowWrap'),
  $prev=$arrowWrap.find('.prev'),
  $next=$arrowWrap.find('.next'),
  $indicator=$sliderWrap.find('.indicator'),
  $indicatorA=$indicator.find('.a');

  let sliderLeg=$slider.length,
  currentidx=0,
  indicatorHtml='',
  timer;

  $slider.each(function(i){
    let cont=$(this).find('img').attr('alt');
    indicatorHtml+="<a href='#none'>"+(i+1)+"</a>";
    $indicator.html(indicatorHtml);
  });

  $sliders.css('width',(sliderLeg*100)+"%");
  $indicator.find('a').eq(currentidx).addClass('active');
  autoPlay();

  //함수
  function goToSlider(idx){
    $sliders.stop().animate({left:(-100*idx)+'%'},1000);
    currentidx=idx;
    arrwHid();
    $indicator.find('a').eq(currentidx).addClass('active').siblings().removeClass('active');
  }; 

  //이벤트
  $indicator.find('a').click(function(){
    let $idx=$(this).index(); //0부터 시작
    goToSlider($idx);
    $(this).addClass('active').siblings().removeClass('active');
  });

  //next,prev
  $arrowWrap.find('a').click(function(e){
    e.preventDefault();
    if($(this).hasClass('prev')){
      goToSlider(currentidx-1);
    }else{
      //next
      goToSlider(currentidx+1);
    }
    $indicator.find('a').eq(currentidx).addClass('active').siblings().removeClass('active');
  });
  function arrwHid(){
    if(currentidx===0){
      $prev.addClass('hid');
    }else{$prev.removeClass('hid');};

    //next
    if(currentidx===sliderLeg-1){
      $next.addClass('hid');
    }else{$next.removeClass('hid')}
  }

  //자동슬라이드
  function autoPlay(){
    timer=setInterval(function(){
      let nextIdx=(currentidx+1)%sliderLeg;
      goToSlider(nextIdx);
    },4000)
  }
  function stop(){
    clearInterval(timer);
  };
  $sliderWrap.mouseenter(function(){
    stop()
  }).mouseleave(function(){
    autoPlay();
  })

  //리뷰 슬라이드
  const $sliderWrapR=$('.sliderWrap7'),
  $slidesR=$('.slides7'),
  $box=$('.box'),
  $arrowR=$('.arrow7'),
  $PrevR=$('.prev7'),
  $NextR=$('.next7');
  let boxCount=$box.length,
      currentR=0;

  function gotoSlider(e){
    $box.stop().animate({'left':-25*e+'%'},1000);
    currentR=e;
    update();
  }
  $PrevR.click(function(){
    gotoSlider(currentR-1);
    if(currentR===0){
      $PrevR.addClass('disabled');
      $NextR.removeClass('disabled');
      $PrevR.removeClass('disabled');
      gotoSlider(currentR);
    }
  });

  $NextR.click(function(){
    gotoSlider(currentR+1);
    if(currentR<4){
      $PrevR.removeClass('disabled');
      $NextR.removeClass('disabled');
      gotoSlider(currentR);
    }else{
      // gotoSlider(0);
      $NextR.addClass('disabled'); //next 버튼 안보임
    } 
  });


}); //e:jquery