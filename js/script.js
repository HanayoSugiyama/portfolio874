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


//スライダー
if (window.matchMedia("(max-width: 768px)").matches) {
  document.getElementsByClassName("slider")[0].classList.remove("slider");}

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




//TOPへ戻るの設定
//上から500以上スクロールしたら#page-topに.openを追加し、300未満の時は.openを外す
const getScrollY = () => {
  const scrolled = window.scrollY;

  //付け外ししたい要素の取得
  const pageTop = document.querySelector('#page-top');

  if (scrolled >= 500) {
      pageTop.classList.add('open')
  } else {
      pageTop.classList.remove('open')
  }
};

window.addEventListener('scroll', getScrollY);
//ここまでTOPへ戻るの設定

var navPos = jQuery( '#global-nav' ).offset().top; // グローバルメニューの位置
var navHeight = jQuery( '#global-nav' ).outerHeight(); // グローバルメニューの高さ
jQuery( window ).on( 'scroll', function() {
	if ( jQuery( this ).scrollTop() > navPos ) {
		jQuery( 'body' ).css( 'padding-top', navHeight );
		jQuery( '#global-nav' ).addClass( 'm_fixed' );
	} else {
		jQuery( 'body' ).css( 'padding-top', 0 );
		jQuery( '#global-nav' ).removeClass( 'm_fixed' );
	}
});