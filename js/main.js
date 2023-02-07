var newA = [];
$(document).ready(function () {
   $('.leftHolder').append($('.innerHolder img').clone());
   //----------------------------------------------------------------
   // Scolling page on Dot click
   $('.innerHolder').each(function (i, ele) {
      var holder = $('.innerHolder');
      var button = $('<div class="dotBtn">' + (i + 1) + '</div>')
      $('.dotHolder').append(button);
      button.bind('click', function () {
         var pos = ScrollTrigger.positionInViewport(ele, 'top');
         var top = pos * $(window).height() + $(window).scrollTop();
         console.log('Clicked - ', top);
         $("body, html").stop().animate({ scrollTop: top }, 500, 'swing', function () {
         });
      });
   })
   //----------------------------------------------------------------
   //----------------------------------------------------------------
   // Pinning .leftHolder when come in screen
   ScrollTrigger.create({
      trigger: ".holder",
      start: "-50px top",
      end: "bottom 50%+=100px",
      pin: ".leftHolder"
   });
   //----------------------------------------------------------------
   //----------------------------------------------------------------
   // Targeting section and animation when they pass
   function showLeftImage(i) {
      console.log(i);
      gsap.killTweensOf($('.leftHolder img'));
      gsap.to($('.leftHolder img'), { opacity: 0, duration: 0.6 });
      gsap.killTweensOf($('.leftHolder img')[i]);
      gsap.to(gsap.utils.toArray('.leftHolder img')[i], { opacity: 1, duration: 0.6 });
   }
   showLeftImage(0);
   gsap.utils.toArray('.innerHolder').forEach((pannel, i) => {
      var ss = ScrollTrigger.create({
         trigger: pannel,
         start: "top center",
         end: "bottom center",
         onEnter: () => {
            showLeftImage(i);
         },
         onEnterBack: () => {
            showLeftImage(i);
         },
      });

   });
   // 
});

