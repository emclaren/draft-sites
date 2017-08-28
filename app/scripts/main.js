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

    var i = ((scrollTop / 10)%10).toFixed(0)
    if (i % 1 == 0)
        $(".show").attr({
            "src": "img/horse" + i + ".jpg",
            "alt": i
        })
    	$("#body-height").css({
            'min-height':  1000 + scrollTop +"px"
     })
   	 // $(".show2").attr({
     //        "src": "img/horse" + i + ".jpg",
     //        "alt": i
     //    })
})



var navselect
    $("#about").click(function () {
        $('.show').css({
         'left': 300 
        })

        // $(this).children("ul").toggle();
    });



// $(window).scroll(function() {
//     var scrollTop = $(this).scrollTop()
//     console.log(scrollTop)

//     var i = ((scrollTop / 10)%10).toFixed(0)
//     if (i % 1 == 0)
//         $(".show").attr({
//             "src": "img/horse" + i + ".jpg",
//             "alt": i
//         })
//     	$("#body-height").css({
//             'min-height':  1000 + scrollTop +"px"
//      })


// })




// var myElement = document.querySelector("#body-height");
// myElement.style.min-height = "30000";


