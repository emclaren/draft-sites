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
    $(".show").attr({
      "src": "img/horse" + i + ".jpg",
      "alt": i
    })
  $("#body-height").css({
    'min-height':  1000 + scrollTop +"px"
  })
  $(".show2").attr({
    "src": "img/horse" + i + ".jpg",
    "alt": i
  })
})


var title
$("#about").click(function () {
 $('.text').css({
   'display': "none"
 })
 $('#about-text').css({
   'display': "block"
 })
 $('.show').css({
  'opacity': ".2"
})
 $('.show2').css({
  'opacity': ".08"
})
});


var title
$("#port").click(function () {
  $('.text').css({
   'display': "none"
 })
  $('#cv-text').css({
   'display': "block"
 })
  $('.show').css({
    'opacity': ".2"
  })
  $('.show2').css({
    'opacity': ".08"
  })
});

var title
$("#cv").click(function () {
  $('.text').css({
   'display': "none"
 })
  $('#cv-text').css({
   'display': "block"
 })
  $('.show').css({
    'opacity': ".2"
  })
  $('.show2').css({
    'opacity': ".08"
  })
});


var title
$("#contact").click(function () {
  $('.contact-list').toggle({
  })
});

var navselect
$(".site-header").click(function () {
  $('.text').css({
   'display': "none"
 })
  $('.show').css({
    'opacity': ".8"
  })
  $('.show2').css({
    'opacity': ".5"
  })
});


var navselect2
$("#close-button").click(function() {
  $('.text').css({
   'display': "none"
 })
  $('.show').css({
    'opacity': ".8"
  })
  $('.show2').css({
    'opacity': ".5"
  })
});

var navselect
$(".flex-container").click(function () {
  $('.text').css({
   'display': "none"
 })
  $('.show').css({
    'opacity': ".8"
  })
  $('.show2').css({
    'opacity': ".5"
  })
});



// $( document.body ).click(function() {
//   $( ".show:hidden:first" ).fadeIn( "slow" );
// });
