let y = 0;
var ratio = window.devicePixelRatio || 1;
window.addEventListener('scroll', () => {
  y = window.pageYOffset;
  console.log(y);
  console.log(screen.width * ratio);
  if (y >= 900) {
    document.querySelector('#slogan-1').classList.add('animate__fadeInRight');
  }
  if (y >= 1050) {
    document.querySelector('#slogan-2').classList.add('animate__fadeInLeft');
  }
  if (y >= 1300) {
    document.querySelector('#slogan-3').classList.add('animate__fadeInRight');
  }
  if (y >= 1750) {
    document.querySelector('#slogan-4').classList.add('animate__fadeInRight');
  }
  if (y >= 1950) {
    document.querySelector('#slogan-5').classList.add('animate__fadeInLeft');
  }
  if (y >= 2250) {
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
