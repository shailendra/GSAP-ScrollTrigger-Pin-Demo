$(document).ready(function () {
   if ($('.leftHolder').length > 0) {
      $('.leftHolder').append($('.innerHolder img').clone());
      ScrollTrigger.create({
         trigger: ".holder",
         start: "-50px top",
         end: "bottom 50%+=100px",
         pin: ".leftHolder"
      });
      function showleftImage(i) {
         console.log(i);
         gsap.killTweensOf($('.leftHolder img'));
         gsap.to($('.leftHolder img'), { opacity: 0, duration: 0.6 });
         gsap.killTweensOf($('.leftHolder img')[i]);
         gsap.to(gsap.utils.toArray('.leftHolder img')[i], { opacity: 1, duration: 0.6 });
      }
      showleftImage(0);
      gsap.utils.toArray('.innerHolder').forEach((pannel, i) => {
         ScrollTrigger.create({
            trigger: pannel,
            start: "top center",
            end: "bottom center",
            onEnter:()=>{
               showleftImage(i);
            
            },
            onEnterBack:()=>{
               showleftImage(i);
            },
            //markers: true
         });
      });
   }
});

