$(function(){
// 일반레이어팝업
  $(".main_btn").click(function(){
    $(".popup").fadeIn();
  });
  $(".popup .pop_close").click(function(){
    $(".popup").fadeOut();
  });
});