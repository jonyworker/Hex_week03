$(document).ready(function() {

  /* ======= 漢堡選單 ======= */

  $('.ham-icon').click(function (e) { 
    e.preventDefault();
    $('.dropdown').toggleClass('active');
  });

  /* ======= 問與答 ======= */
  //所有答案區 隱藏
  $('.faq-card-item-body').hide();
  //設定讓第一個 li 加上 active
  $('.faq-card-item').eq(0).addClass('active');
  //第一個 li 答案區 顯示
  $('.faq-card-item-body').eq(0).show();

  $('.faq-card-item').click(function (e) { 
    //去掉原始設定
    e.preventDefault();
    //點擊時啟動class 'active' 其他的 移除 'active'
    $(this).toggleClass('active').siblings().removeClass('active');
    //點擊時父層時 展開 子層的下一個小孩
    $(this).children().next().slideToggle(550);
    //點擊 收起 其他 li 子層的下一個小孩
    $(this).siblings().children().next().slideUp();
  });


});


