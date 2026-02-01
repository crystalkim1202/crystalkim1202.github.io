$(function(){
  // 전체메뉴(header nav>ul:hover>li>ul)
  $("header nav").mouseenter(function(){
    $(this).find(".sub_bg").stop().slideDown();
  });
  $("header nav").mouseleave(function(){
    $(this).find(".sub_bg").stop().slideUp();
  });
  
  // 페이드 효과 슬라이드
  let now_img, next_img;
  setInterval(function(){
    now_img = $("#slide ul li").eq(0);
    next_img = $("#slide ul li").eq(1);
    next_img.addClass('active').css("opacity", 0).animate({
      opacity:1
    }, 600, function(){
      $("#slide ul").append(now_img);
      now_img.removeClass('active');
    });
  }, 3000);

  // 이미지 슬라이드
  $('.bxslider').bxSlider({
    auto: true,
  });

  // 모바일 메뉴
  $(".hamburger").click(function(){
    $(".mobile_menu").toggleClass("active");
  });

});