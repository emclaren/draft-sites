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
    if (i % 1 == 0)
        $(".show").attr({
            // "src": "img/horse" + i + ".jpg",
            "src": "img/horse1.jpg",
            "alt": i
        })
    else if (i % 2 == 0 )
    	 $(".show").attr({
            // "src": "img/horse" + i + ".jpg",
            "src": "img/horse2.jpg",
            "alt": i
        })
    // else if (i < 3)
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse3.jpg",
    //         "alt": i
    //     })
    // else if (i < 4)
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse4.jpg",
    //         "alt": i
    //     })
    // else if (i < 5 )
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse5.jpg",
    //         "alt": i
    //     })
    // else if (i < 6)
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse6.jpg",
    //         "alt": i
    //     })
    // else if (i < 7)
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse7.jpg",
    //         "alt": i
    //     })
    //  else if (i < 8)
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse8.jpg",
    //         "alt": i
    //     })
    // else if (i < 9)
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse9.jpg",
    //         "alt": i
    //     })
    // else if (i < 10)
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse10.jpg",
    //         "alt": i
    //     })
    // else if (i < 11)
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse11.jpg",
    //         "alt": i
    //     })
    // else 
    // 	 $(".show").attr({
    //         // "src": "img/horse" + i + ".jpg",
    //         "src": "img/horse8.jpg",
    //         "alt": i
    //     })
    lastI = 300
})





// var lastI
// $(window).scroll(function() {
// 	var scrollTop = $(this).scrollTop()
//     console.log(scrollTop)
//     console.log("hi")
//     var i = (scrollTop / 10).toFixed(0)
//     if (i % 2 = 0 ){
//     	  console.log("ABOVE2004reel")
//     }
//         // $(".show").attr({
//         //     // "src": "img/horse" + i + ".jpg",
//         //     "src": "img/horse20.jpg",
//         //     "alt": i
      
//         // })

//     lastI = i
// })

  // else if (i > 400) {
  //   	 $(".show").attr({
  //           // "src": "img/horse" + i + ".jpg",
  //           "src": "img/horse20.jpg",
  //           "alt": i

  //       })

  //  	else if (i > 600) {
  //   	 $(".show").attr({
  //           // "src": "img/horse" + i + ".jpg",
  //           "src": "img/horse40.jpg",
  //           "alt": i
  //       })

  //  	else if (i > 400) {
  //   	 $(".show").attr({
  //           // "src": "img/horse" + i + ".jpg",
  //           "src": "img/horse50.jpg",
  //           "alt": i
  //       })
    

// var lastI2
// $(window).scroll(function() {
//     var scrollTop = $(this).scrollTop()
//     console.log(scrollTop)
//     console.log(test-image-animate)
//     var i = (scrollTop / 10).toFixed(0)
//     if (i !== lastI)
//         $(".image-animate").attr({
//             "src": "images/horse1.jpg",
//             "alt": i
//         })
//     lastI2 = i
// })
