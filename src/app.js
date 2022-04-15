let y = 0;
var ratio = window.devicePixelRatio || 1;
const position = () => {
  y = window.scrollY || window.pageYOffset;
  console.log(y);
  console.log(screen.width * ratio);
  const sl1 = document.querySelector('#slogan-1').getBoundingClientRect();
  console.log(sl1.y);
  if (y >= 0) {
    console.log(+'xxx');
    document.querySelector('#slogan-1').classList.add('animate__fadeInRight');
  }
  if (y >= 0) {
    document.querySelector('#slogan-2').classList.add('animate__fadeInLeft');
  }
  if (y >= 0) {
    document.querySelector('#slogan-3').classList.add('animate__fadeInRight');
  }
  if (y >= 0) {
    document.querySelector('#slogan-4').classList.add('animate__fadeInRight');
  }
  if (y >= 0) {
    document.querySelector('#slogan-5').classList.add('animate__fadeInLeft');
  }
  if (y >= 0) {
    document.querySelector('#slogan-6').classList.add('animate__fadeInRight');
  }
};
document.body.addEventListener('touchmove', position);
window.addEventListener('scroll', position);

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
