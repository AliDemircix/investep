let y = 0;
var ratio = window.devicePixelRatio || 1;
window.addEventListener('scroll', () => {
  y = window.scrollY || window.pageYOffset;
  console.log(y);
  console.log(screen.width * ratio);
  if (y >= 710) {
    document.querySelector('#slogan-1').classList.add('animate__fadeInRight');
  }
  if (y >= 850) {
    document.querySelector('#slogan-2').classList.add('animate__fadeInLeft');
  }
  if (y >= 950) {
    document.querySelector('#slogan-3').classList.add('animate__fadeInRight');
  }
  if (y >= 1100) {
    document.querySelector('#slogan-4').classList.add('animate__fadeInRight');
  }
  if (y >= 1250) {
    document.querySelector('#slogan-5').classList.add('animate__fadeInLeft');
  }
  if (y >= 1350) {
    document.querySelector('#slogan-6').classList.add('animate__fadeInRight');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    autoScroll: {
      speed: 1,
    },
    pagination: false,
    arrows: false,
  });

  splide.mount(window.splide.Extensions);
});
