/* use window.scrollY to set background color for first CTA */

  var scrollpos = window.scrollY;
  var header = document.getElementById("scroll-target");

  if (header) {
    function addClassOnScroll() {
      header.classList.add("active");
    }

    function removeClassOnScroll() {
        header.classList.remove("active");
    }

    window.addEventListener('scroll', function(){

        scrollpos = window.scrollY;

        if (scrollpos > 250 ) {
          if(scrollpos > 300 && scrollpos < 800 ){
              addClassOnScroll();
          } else {
            removeClassOnScroll();
          }
        }
    });

/* hero element animation and smooth-scroll handler */

  document.getElementById("scroll-btn").addEventListener('click', function() {
    heroTimeline.play();
  })

}

/* define hero text animation timeline */
  var heroTimeline = new TimelineMax({paused: true});

  heroTimeline.to('#hero-text-1', '0.5', {
      x: 160,
      ease: Power2.easeInOut
    })
    .to('#title', '0.1', { opacity: 0, ease: Power0.easeIn})
    .to('#hero-text-2', '0.5', {
      x: 120,
      ease: Power2.easeInOut
    })
    .to('#hero-text-3', '0.5', {
      x: 80,
      ease: Power2.easeInOut
    })
    .to(['#hero-text-2','#hero-text-3'],'0.5', { opacity: 0, ease: Power3.easeIn })
    .staggerTo(['#hero-text-1','#hero-text-2','#hero-text-3'], '0.75', {
      scaleX: 1.2,
      scaleY: 1.2,
      ease: Back.easeOut.config(1.5),
      opacity: 0.6
    }, '0.4')
    .to(['#hero-text-2','#hero-text-3','#hero-text-1'],'0.3',
      {opacity: 0, ease: Power3.easeIn}
    )
    .call(smoothScroll);


  function smoothScroll() {
    TweenMax.to(window, '0.7', { scrollTo: "#scroll-target", ease:Power2.easeInOut });
    // call reset function on timeline
    Reset();
  }

  // debounce/reset function for timeline

  function Reset() {
    setTimeout(function(){
        heroTimeline.pause();
        heroTimeline.progress(0)
    }, 4000)
  }

/* scrolled tween section */

var firstScroll = new TimelineMax;

firstScroll.set(['.story-title','.image-1'], {y: 400})
  .to('.story-title', '5', {
    y:-50,
    scaleY: 0.7,
    scaleX: 0.7
  })
  .to('.image-1', '5', {
    y: -150,
    x: -150,
    scale: 0.6
  })
  .to('.image1-caption', '5', {
    opacity: 1,
    x:125,
    scale: 0.9
  })
  .to('.image-1', '5', {opacity: 1})
  .set('.bg-elem', {x: 500})
  .to('.image1-caption', '5', {
    y: -265
  })
  .to('.bg-elem', '5', {
    x: 10,
    scaleY: 0.60,
    opacity: 0.2
  })
  .set('.text-section', {scale: 1.2, yPercent: -10, xPercent: 300})
  .to('.text-section', '5', {
    scale: 1,
    y: -150,
    opacity: 1
  })
  .to('.text-section', '5', {
    y: -500
  })
  .to('.uline', '2', {
    opacity: 1
  });

var secondScroll = new TimelineMax;

secondScroll
  .to('.image-1', '0.5', {opacity: 0}, "+= 1")
  .fromTo('.image-2', '3', {
    transformOrigin: 'center top',
    opacity: 0.1,
    scale: 0.9,
    y: -150
  }, {
    opacity: 1,
    scale: 0.6,
    x: 200
  }, '-= 1')
  .set('.text-section2', {scale: 1.2, x: -600})
  .to('.text-section2', '3', {
    y: -600,
    scale: 1.1,
    opacity: 1
  })
  .to('.uline2', '3', {opacity: 1});

var thirdScroll = new TimelineMax;

thirdScroll
  .set('.content-title', {scale: 1.6})
  .set('.phone-body', {scale: 1.3, yPercent: -10})
  .to('.content-title', '3', {
    y: -600,
    opacity: 1,
    scale: 1,
    transformOrigin: "center bottom"
  })
  .to('.phone-body', '3', {
    y: -400,
    scale: 1.4
  })
  .to('.phone-body', '3', {
    y: -450,
    x: -400,
    scale: 1
  })
   .to('.phone-body', '2', {
     opacity: 0.8
   }, "-=2")
   .set(['.text-section3', '.text-section4'], {x: 500, y: -200})
   .fromTo('.text-section3 p', '2', {
    opacity: 0,
    scale: 1.3,
   },
   {
    opacity: 1,
    scale: 0.8,
    y: -250
   })
   .to('.text-section3 span', '2', {
    opacity: 1
   })
   .fromTo('.text-section4 p', '2', {
    opacity: 0,
    scale: 1.3
   },
   {
    x: 300,
    opacity: 1,
    scale: 0.8
   })
   .to('.text-section4 span', '2', {
    opacity: 1
   })

var controller = new ScrollMagic.Controller();

// First Scroll Scene

var scene1 = new ScrollMagic.Scene({
  triggerElement: '.trigger-1',
  triggerHook: 0.5,
  duration: '90%'
}).setTween(firstScroll).addTo(controller);

// Second Scroll Scene
var scene2 = new ScrollMagic.Scene({
  triggerElement: '.trigger-2',
  triggerHook: 0,
  duration: '70%'
}).setTween(secondScroll).addIndicators().addTo(controller);

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.trigger-3',
  triggerHook: 0.2,
  duration: '100%'
}).setTween(thirdScroll).addIndicators().addTo(controller);

/* initialize AnimateOnScroll */

AOS.init();

/* set rellax parallax scroll on services cards */

// var rellaxElement = document.querySelector('.rellax');
//
// if (rellaxElement) {
//   var rellax = new Rellax('.rellaxElement', {
//     speed: 1,
//     center: true,
//     wrapper: null,
//     vertical: true,
//     horizontal: false
//   });
// }

/* team-members pop-in handler */

var teamMembers = Array.from(document.querySelectorAll('.team-member'));

teamMembers.forEach(card => {
  card.addEventListener('click' , function() {
    teamMembers.forEach(x => { x.classList.remove('active')});
    this.classList.add('active')
  })
})




