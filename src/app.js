let y = 0;
var ratio = window.devicePixelRatio || 1;
window.addEventListener('scroll', () => {
  y = window.pageYOffset;
  console.log(y);
  console.log(screen.width * ratio);
  if (y >= (screen.width < 600 ? 900 : 650)) {
    document.querySelector('#slogan-1').classList.add('animate__fadeInRight');
  }
  if (y >= (screen.width < 600 ? 1050 : 660)) {
    document.querySelector('#slogan-2').classList.add('animate__fadeInLeft');
  }
  if (y >= (screen.width < 600 ? 1300 : 670)) {
    document.querySelector('#slogan-3').classList.add('animate__fadeInRight');
  }
  if (y >= (screen.width < 600 ? 1750 : 900)) {
    document.querySelector('#slogan-4').classList.add('animate__fadeInRight');
  }
  if (y >= (screen.width < 600 ? 1950 : 900)) {
    document.querySelector('#slogan-5').classList.add('animate__fadeInLeft');
  }
  if (y >= (screen.width < 600 ? 2250 : 900)) {
    document.querySelector('#slogan-6').classList.add('animate__fadeInRight');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: window.innerWidth < 600 ? 4 : 10,
    autoScroll: {
      speed: 1,
    },
    pagination: false,
    arrows: false,
  });

  splide.mount(window.splide.Extensions);
});
