document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    breakpoints: {
      640: {
        perPage: 4,
      },
    },
    autoScroll: {
      speed: 1,
    },
    pagination: false,
    arrows: false,
    direction: 'rtl',
  });

  splide.mount(window.splide.Extensions);
});
document.addEventListener('DOMContentLoaded', function () {
  const splide1 = new Splide('#splide1', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    breakpoints: {
      640: {
        perPage: 4,
      },
    },
    autoScroll: {
      speed: 1,
    },
    pagination: false,
    arrows: false,
    direction: 'ltr',
  });

  splide1.mount(window.splide.Extensions);
});
document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#splide2', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    breakpoints: {
      640: {
        perPage: 4,
      },
    },
    autoScroll: {
      speed: 1,
    },
    pagination: false,
    arrows: false,
    direction: 'rtl',
  });

  splide.mount(window.splide.Extensions);
});
