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





var lastI
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop()
    console.log(scrollTop)
    var i = (scrollTop / 10).toFixed(0)
    if (i !== lastI)
        $(".show").attr({
            "src": "img" + i + ".jpg",
            "alt": i
        })
    lastI = i
})



var lastI
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop()
    console.log(scrollTop)
    var i = (scrollTop / 10).toFixed(0)
    if (i !== lastI)
        $(".image-animate").attr({
            "src": "horse" + i + ".jpg",
            "alt": i
        })
    lastI = i
})
