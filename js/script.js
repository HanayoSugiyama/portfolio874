'use strict';

setTimeout(function() {
  document.querySelector('.top__gif').style.display = 'none';
}, 7500);

/* glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
  $('.glowAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("glow");

    } else {
      $(this).removeClass("glow");
    }
  });
}

// 画面が読み込まれたら5秒後に動かしたい場合の記述
$(document).ready(function () {
  setTimeout(function(){
    //spanタグを追加する
    var element = $(".glowAnime");
    element.each(function () {
      var text = $(this).text();
      var textbox = "";
      text.split('').forEach(function (t, i) {
        if (t !== " ") {
          if (i < 10) {
            textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
          } else {
            var n = i / 10;
            textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
          }

        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
  }, 500);
  GlowAnimeControl(); // アニメーション用の関数を呼ぶ
});  //ここまで画面が読み込まれたらすぐに動かしたい場合の記述*/


//モーダル
$(".video-open").modaal({
	type: 'video',
	overlay_close:true,//モーダル背景クリック時に閉じるか
	background: '#28BFE7', // 背景色
	overlay_opacity:0.8, // 透過具合
    youtube: {
       autoplay: 1,
       mute: 1,
   }
});
//モーダルここまで


/*スライダー

$('.slider').slick({
  autoplay: true,//自動的に動き出す。
  infinite: true,//スライドをループさせる。
  speed: 500,//スライドのスピード。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示

  
});
スライダーここまで*/

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.slider').slick({
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: false,
      nextArrow: false,
      centerMode: true,
      variableWidth: true,
      dots: true,
    });
  } else {
    $('.slider').slick({
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>',
      centerMode: true,
      variableWidth: true,
      dots: true,
    });
  }
});