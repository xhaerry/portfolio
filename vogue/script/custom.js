$(document).ready(function(){
  // alert('test')
  const $fs=$('.fs'),
    $bt=$('.bt'),
    $lv=$('.lv'),
    $pp=$('.pp'),
    $vd=$('.vd'),
    $fashion_sec=$('.fashion_sec'),
    $beauty_sec=$('.beauty_sec'),
    $living_sec=$('.living_sec'),
    $people_sec=$('.people_sec'),
    $video_sec=$('.video_sec');

  const $sec1=$('#sec1').offset().top, //872.953125
  $sec2=$('#sec2').offset().top, //1685.8828125
  $sec3=$('#sec3').offset().top, //12375.3671875
  $sec4=$('#sec4').offset().top; //3033.328125
  
  //header
  $('.search i').click( function(){
    $('.search input').toggle();
  });

  //gnb
  $('nav .gnb>li').mouseenter(function(){
    $(this).find('.sub').stop().slideDown()
    $('.sub_bar').stop().slideDown()
  }).mouseleave(function(){
    $('.sub_bar,nav .gnb .sub').stop().slideUp()
  })

  //mobile
  $('.mob_icon').click(function(){
    $('nav').toggleClass('on');
    $(this).toggleClass('close');
  })

  //main
  // const $main=$('#main'),
  // $slideWrap=$main.find('.sliderwrap'),
  // $slides=$slideWrap.find ('.slides'),
  // $slide=$slides.find('a'),
  // $slideImg=$('.img'),
  // slidelenth=('.slides>a').length; 

  // let $slideImgHig=$slideImg.height();

  // $(window).resize(function(){
  //   let win=$(this),
  //   winWid=win.width();
  //   $slideImgHig=$slideImg.height();
  //   $slideWrap.height($slideImgHig);

  //   console.log($slideImgHig); 
  //   console.log(slidelenth);

  //   if(winWid<=486){
  //     for (let i=0; i<slidelenth; i++){
  //      $slide.eq(i).find('img').attr('src','images/')
  //     }
  //   }else{
  //     for (let i=0; i<slidelenth; i++){
  //      $slide.eq(i).find('img').attr('src','main'+(1+i)+'.jpg')
       
  //     }
  //   }

  // }).resize()

  
  //HOT TOPPIC
  $('.cont_gnb').find('a').click(function(){

  })

  // FASHION
  $fs.click(function(){
    $bt.removeClass('active');
    $lv.removeClass('active');
    $pp.removeClass('active');
    $vd.removeClass('active');
    $fs.addClass('ative');
    $fashion_sec.show();
    $beauty_sec.hide();
    $living_sec.hide();
    $people_sec.hide();
    $video_sec.hide();
  });
  // BEAUTY
  $bt.click(function(){
    $fs.removeClass('active');
    $lv.removeClass('active');
    $pp.removeClass('active');
    $vd.removeClass('active');
    $bt.addClass('active');
    $beauty_sec.show();
    $fashion_sec.hide();
    $living_sec.hide();
    $people_sec.hide();
    $video_sec.hide();
  });

  //LIVING
  $lv.click(function(){
    $fs.removeClass('active');
    $bt.removeClass('active');
    $pp.removeClass('active');
    $vd.removeClass('active');
    $lv.addClass('active');
    $living_sec.show();
    $fashion_sec.hide();
    $beauty_sec.hide();
    $people_sec.hide();
    $video_sec.hide();
  });
  //PEOPLE
  $pp.click(function(){
    $fs.removeClass('active');
    $bt.removeClass('active');
    $lv.removeClass('active');
    $vd.removeClass('active');
    $pp.addClass('active');
    $people_sec.show();
    $fashion_sec.hide();
    $beauty_sec.hide();
    $living_sec.hide();
    $video_sec.hide();
  });
  //VIDEO
  $vd.click(function(){
    $fs.removeClass('active');
    $bt.removeClass('active');
    $lv.removeClass('active');
    $pp.removeClass('active');
    $vd.addClass('active');
    $video_sec.show();
    $fashion_sec.hide();
    $beauty_sec.hide();
    $living_sec.hide();
    $people_sec.hide();
  });

  //RUNWAY
const $runSlideWrap=$('.run_slideWrap'),
$runSliders=$('.runSliders'),
$runwaySlider=$('.runwaySlider'),
$r_item=$('.r_item'),
$rItemA=$('.r_item').find('a'),
$rPrev=$('.rPrev'),
$rNext=$('.rNext');

let rImgCount=$rItemA.length,
currentPt=0;

$(window).resize(function(){
let win=$(this),
winWid=win.width();
currentR=0;

function gotoslider(i){
  if(winWid<768){
    $runwaySlider.css('left',(-33.3333*i)+'%');
    currentR=i;
    if(winWid<486){
      $runwaySlider.css('left',(-50*i)+'%');
      currentR=i;
    }
  }else{
    $runwaySlider.css('left',(-25*i)+'%');
    currentR=i;
  }

}
$rPrev.click(function(){
  if(winWid<768){
    if(currentR==0){
      gotoslider(7)
    }else{
      gotoslider(currentR-1)
    }
    if(winWid<486){
      if(currentR==0){
        gotoslider(7)
      }else{
        gotoslider(currentR-1)
      }
    }
  }else{
    if(currentR==0){
      gotoslider(0)
    }else{
      gotoslider(currentR-1)
    }
  } 
})

$rNext.click(function(){
  if(winWid<768){
    if(currentR<7){
      gotoslider(currentR+1)
    }else{
      gotoslider(0)
    }
    if(winWid<486){
      if(currentR<1){
        gotoslider(currentR+1)
      }else{
        gotosliderR(0)
      }
    }
  }else{
    if(currentR<7){
      gotoslider(currentR+1)
    }else{
      gotoslider(0)
    }
  } 
})   
}).resize();
  

 
//25th VOGUE KOREA

//MAGAZINE

});
