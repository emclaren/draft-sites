"use strict";var lastI;$(window).scroll(function(){var s=$(this).scrollTop(),t=(s/10%10).toFixed(0);t%1==0&&$(".show").attr({src:"img/horse"+t+".jpg",alt:t}),$("#body-height").css({"min-height":1e3+s+"px"})});var navselect;$("#about").click(function(){$(".show").css({left:300})});