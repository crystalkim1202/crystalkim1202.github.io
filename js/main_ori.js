  // 페이드 효과 슬라이드
  // let now_img, next_img;
  // setInterval(function(){
  //   now_img = $(".bxslider li").eq(0);
  //   next_img = $(".bxslider li").eq(1);
  //   next_img.addClass('active').css("opacity", 0).animate({
  //     opacity:1
  //   }, 600, function(){
  //     $(".bxslider").append(now_img);
  //     now_img.removeClass('active');
  //   });
  // }, 3000);

  $(document).ready(function(){
    $('.bxslider').bxSlider({
      mode: 'horizontal',
      auto: true,
      // autoControls: true,
      // stopAutoOnClick: true,
      pager: true,
      controls: true,
      speed: 600
      // slideWidth: 600
      // adaptiveHeight: false
    });
  });

// $(function(){
//   // .popup 클릭 시
//   $(".openPop").click(function(){
//     $(".popup, .modal").css("display", "block");
//     // 또는 애니메이션 쓰고 싶으면
//     // $(".popup, .modal").fadeIn();
//   });

//   // 닫기 버튼
//   $(".popup .pop_close").click(function(e){
//     // e.stopPropagation(); // popup 클릭 이벤트 전파 방지
//     $(".popup, .modal").fadeOut();
//   });
// });

// $(function(){

//   // 팝업 열기
//   $(".openPop").click(function(){
//     $(".modal, .popup").fadeIn();
//   });

//   // 배경(modal) 클릭 시 닫기
//   $(".modal").click(function(){
//     $(".modal, .popup").fadeOut();
//   });

//   // 팝업 내부 클릭 시 닫히지 않게
//   $(".popup").click(function(e){
//     e.stopPropagation();
//   });

//   // 닫기 버튼
//   $(".popup .pop_close").click(function(){
//     $(".modal, .popup").fadeOut();
//   });

// });

$(function(){

  // 팝업 열기
  $(".openPop").click(function(){
    const imgSrc = $(this).data("img"); // data-img 값 가져오기

    $(".popup img").attr("src", imgSrc);
    $(".modal, .popup").fadeIn();
    $("body").addClass("no-scroll");
  });

  // 배경 클릭 시 닫기
  $(".modal").click(function(){
    $(".modal, .popup").fadeOut();
    $("body").removeClass("no-scroll");
  });

  // 팝업 내부 클릭 시 닫히지 않게
  $(".popup").click(function(e){
    e.stopPropagation();
  });

    // 닫기 버튼
  $(".popup .pop_close").click(function(){
    $(".modal, .popup").fadeOut();
  });



gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".wrap:not(footer .wrap)").forEach(function(wrap){
  gsap.from(wrap, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: wrap,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});


});