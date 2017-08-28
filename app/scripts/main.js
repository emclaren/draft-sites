// console.log('\'Allo \'Allo!');


// var num = 1;
// $('img').attr("src","http://sendamessage.to/dist/images/fistbump-700/1.jpg");

// $(window).scroll(function () { 
//   num = $(window).scrollTop() / 3;

//  if( parseInt(num) === num){

//       $('img').attr("src","http://sendamessage.to/dist/images/fistbump-700/"+ num +".jpg");}
//   else{}

//   if (num<1){
//     $('img').attr("src","http://sendamessage.to/dist/images/fistbump-700/1.jpg");
//   }
//     if (num>30){
//     $('img').attr("src","http://sendamessage.to/dist/images/fistbump-700/30.jpg");
//       $("img").css("position","absolute");
//   }
// });


// $(window).scroll(function() {
//     var scrollTop = $(this).scrollTop()
//     console.log(scrollTop)

//     var i = ((scrollTop / 10)%10).toFixed(0)
//     if (i % 1 == 0)
//         $(".show").attr({
//             "src": "img/horse" + i + ".jpg",
//             "alt": i
//         })
//      $("#body-height").css({
//             'min-height':  1000 + scrollTop +"px"
//      })


// })




// var myElement = document.querySelector("#body-height");
// myElement.style.min-height = "30000";



var lastI
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop()
  console.log(scrollTop)

  var i = ((scrollTop / 10)%10).toFixed(0)
  if (i % 1 == 0)
    $(".background-animation").attr({
      "src": "img/horse" + i + ".jpg",
      "alt": i
    })
  $(".content-frame").css({
    'min-height':  1000 + scrollTop +"px"
  })
  $(".background-animation-shadow").attr({
    "src": "img/horse" + i + ".jpg",
    "alt": i
  })
})









// var about
// $("#portfolio").click(function () {
//  $('#about-text').fadeIn({
//    'display': "none"
//  })
// });



var openContent
$(".open-content").click(function () {
  $('.text').fadeOut({
   'display': "none"
 })
 $('.background-animation').css({
  'opacity': ".2"
})
 $('.background-animation-shadow').css({
  'opacity': ".08"
})
});


var closeContent
$(".close-content").click(function () {
  $('.background-animation').css({
    'opacity': ".8"
  })
  $('.background-animation-shadow').css({
    'opacity': ".5"
  })
  $('.text').fadeOut({
   'display': "none"
 })
});

var closeContent
$("content-frame").click(function () {
  $('.text').fadeOut({
   'display': "none"
 })
});

var about
$("#about").click(function () {
 $('#about-text').fadeIn({
   'display': "none"
 })
});


var title
$("#portfolio").click(function () {

  $('#portfolio-text').fadeIn({
   'display': "none"
 })

});

var title
$("#cv").click(function () {

  $('#cv-text').fadeIn({
   'display': "none"
 })

});


// var title
// $("#cv").click(function () {
//   $('.text').css({
//    'display': "none"
//  })
//   $('#cv-text').css({
//    'display': "block"
//  })
//   $('.show').css({
//     'opacity': ".2"
//   })
//   $('.show2').css({
//     'opacity': ".08"
//   })
// });


var title
$("#contact").click(function () {
  $('.contact-list').toggle({
  })
});


