
//** Scrolling to links **//

$(function() {
  $('a[href*=\\#]:not([href=\\#])').on('click', function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    if (target.length) {
     $('html,body').animate({
      scrollTop: target.offset().top
    }, 700);

     return false;
   }
 }
});
});

//** Scrolling back to top

jQuery(document).ready(function() {

  var offset = 250;

  var duration = 300;

  jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop() > offset) {

      jQuery('.back-to-top').fadeIn(duration);

    } else {

      jQuery('.back-to-top').fadeOut(duration);

    }

  });



  jQuery('.back-to-top').click(function(event) {

    event.preventDefault();

    jQuery('html, body').animate({scrollTop: 0}, duration);

    return false;

  })

});








//*Horse Animation- desktop **/
var mouseY0 = 0;
var i =5;

document.onmousemove = function(e) {
  var event = e || window.event;
  window.mouseX1 = event.clientX;
  window.mouseY1 = event.clientY;

}

window.onload = function() {
  setInterval(mousemov, 100);
  var mouseY0 = 0;
}



//*Horse Animation- mobile**/

var lastI
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop()
    // console.log(scrollTop)
    var i = ((scrollTop / 10)%10).toFixed(0)
    if (i % 1 == 0)
      $('.background-animation').attr({
        'src': 'img/horse' + i + '.jpg',
        'alt': i
      })
    $('.background-animation-shadow').attr({
      'src': 'img/horse' + i + '.jpg',
      'alt': i
    })
  })

var lastI
$(window).scroll(function() {
  var scrollTop = $(this).scrollTop()
    // console.log(scrollTop)
    var i = ((scrollTop / 10)%10).toFixed(0)
    if (i % 1 == 0  && screen.width>768)

      $('.content-frame').css({
        'min-height':  1000 + scrollTop +'px'
      })

  })







var about
$("#portfolio").click(function () {
 $('#about-text').fadeIn({
   'display': "none"
 })
});







var openContent
if (screen.width>768){
  $('.open-about').click(function () {
    $('.text').fadeOut({
     'display': 'none'
   })
    $('.content').css({
      'display': 'inline-block'
    })
    $('.background-animation').css({
      'opacity': '.2'
    })
    $('.background-animation-shadow').css({
      'opacity': '.08'
    })
  });

}

var closeContent
if (screen.width>768){
  $('.close-content').click(function () {
    $('.background-animation').css({
      'opacity': '.8'
    })
    $('.background-animation-shadow').css({
      'opacity': '.5'
    })
    $('.content').css({
      'display': 'inline-block'
    })
    $('.text').fadeOut({
     'display': 'none'
   })
  });
}
var closeContent
if (screen.width>768){
  $('content-frame').click(function () {
    $('.text').fadeOut({
     'display': 'none'
   })
  });
}



//this one is a-ok, but removed for testing
// var about
// if (screen.width>768){
// $("#about").click(function () {
//  $('#about-text').fadeIn({
//    'display': "none"
//  })
// });
// }



var title
if (screen.width>768){
  $('#portfolio').click(function () {

    $('#portfolio-text').fadeIn({
     'display': 'none'
   })

  });
}

var title
if (screen.width>768){
  $('#cv').click(function () {

    $('#cv-text').fadeIn({
     'display': 'none'
   })

  });
}
// }

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
if (screen.width>768){
  $("#contact").click(function () {
    $('.contact-list').toggle({
    })
  });
}












































  // $.backstretch([
  // "img/horse1.jpg", 
  // "img/horse2.jpg",
  // "img/horse3.jpg",
  // "img/horse4.jpg",
  // "img/horse5.jpg",
  // "img/horse6.jpg",
  // "img/horse8.jpg",
  // "img/horse9.jpg",
  // "img/horse10.jpg",
  //   ], { fade: 10});


///this one works but it's small
  // $(function () {
  //   var arrayOfPartenaires = [
  //   "img/horse0.jpg",
  //   "img/horse1.jpg", 
  //   "img/horse2.jpg",
  //   "img/horse3.jpg",
  //   "img/horse4.jpg",
  //   "img/horse5.jpg",
  //   "img/horse6.jpg",
  //   "img/horse7.jpg",
  //   "img/horse8.jpg",
  //   "img/horse9.jpg",
  //   ];
  //   var loaders = 0;
  //   function cycleImages() {
  //     var element = arrayOfPartenaires[loaders];
  //     $(".backstretch").css({ 'background-image': 'url(' + element + ')', 'width': '100%', "height": "100%"}).fadeIn("0");
  //     if (loaders < arrayOfPartenaires.length) {
  //       loaders = loaders +1;
  //       if (loaders >= arrayOfPartenaires.length) {                        
  //         loaders = 0;
  //       } 
  //     }
  //     else {
  //       loaders = 0;
  //     }
  //     console.log(loaders, arrayOfPartenaires[loaders]);
  //   }
  //   cycleImages();
  //   setInterval(function () { cycleImages() }, 200);
  // });




// $(function() {
// var body = $('body');
// var backgrounds = new Array(
// 'url(img/horse0.jpg)',
// 'url(img/horse1.jpg)',
// 'url(img/horse2.jpg)',
// 'url(img/horse3.jpg)',
// 'url(img/horse4.jpg)',
// 'url(img/horse5.jpg)',
// 'url(img/horse6.jpg)',
// 'url(img/horse7.jpg)',
// 'url(img/horse8.jpg)'
// );
// var current = 0;

// function nextBackground() {
// body.css(
// 'background',
// backgrounds[current = ++current % backgrounds.length],

// );

// setTimeout(nextBackground, 10000);
// }
// setTimeout(nextBackground, s);
// body.css('background', backgrounds[0]);
// body.css('width', '100%');
// });




