  $(function(){

  // 이미지 슬라이드
  $('.bxslider').bxSlider({
    mode: 'horizontal',
    auto: true,
    pager: true,
    controls: true,
    speed: 600
    // adaptiveHeight: true,      // [핵심] 이미지 높이에 맞춰 슬라이더 높이 조절
    // adaptiveHeightSpeed: 500,  // (선택사항) 높이가 늘어나거나 줄어드는 속도 (기본값: 500)
  });

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
    $("body").removeClass("no-scroll");
  });

  // gsap
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