// use window.scrollY to set background color
var scrollpos = window.scrollY;
var header = document.getElementById("scroll-target");

if (header) {
  function add_class_on_scroll() {
    header.classList.add("active");
  }

  function remove_class_on_scroll() {
      header.classList.remove("active");
  }

  window.addEventListener('scroll', function(){

      scrollpos = window.scrollY;

      if (scrollpos > 250 ) {
        if(scrollpos > 300 && scrollpos < 800 ){
            add_class_on_scroll();
        } else {
          remove_class_on_scroll();
        }
      }
  });

  document.getElementById("scroll-btn").addEventListener('click', function() {
    heroTimeline.play();
  })

}
// run timeline animations and smooth scroll down on click

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
  Reset();
}

function Reset() {
  setTimeout(function(){
      heroTimeline.pause();
      heroTimeline.progress(0)
  }, 4000)
}


AOS.init();

var rellaxElement = document.querySelector('.rellax');

if (rellaxElement) {
  var rellax = new Rellax('.rellaxElement', {
    speed: 1,
    center: true,
    wrapper: null,
    vertical: true,
    horizontal: false
  });
}

var teamMembers = Array.from(document.querySelectorAll('.team-member'));

teamMembers.forEach(card => {
  card.addEventListener('click' , function() {
    teamMembers.forEach(x => { x.classList.remove('active')});
    this.classList.add('active')
  })
})




