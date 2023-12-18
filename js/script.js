'use strict'; // glowAnimeにglowというクラス名を付ける定義
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
});  //ここまで画面が読み込まれたらすぐに動かしたい場合の記述


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
