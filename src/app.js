let y = 0;
let ratio = window.devicePixelRatio || 1;
const position = () => {
  const reveals = document.querySelectorAll('.animate__animated');
  y = window.scrollY || window.pageYOffset;
  console.log(y);
  console.log(screen.width * ratio);
  const sl1 = document.querySelector('#slogan-1').getBoundingClientRect();
  console.log(sl1.y);
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      i % 2 === 0
        ? reveals[i].classList.add('animate__fadeInRight')
        : reveals[i].classList.add('animate__fadeInLeft');
    } else {
      i % 2 === 0
        ? reveals[i].classList.remove('animate__fadeInRight')
        : reveals[i].classList.remove('animate__fadeInLeft');
    }
  }
};
document.body.addEventListener('touchmove', position);
window.addEventListener('scroll', position);
position();
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 10,
    breakpoints: {
      640: {
        perPage: 4,
      },
    },
    autoScroll: {
      speed: 1.3,
    },
    pagination: false,
    arrows: false,
  });

  splide.mount(window.splide.Extensions);
});
