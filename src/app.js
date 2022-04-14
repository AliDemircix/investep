var y = 0;
window.addEventListener('scroll', () => {
  y = window.scrollY;
  console.log(y);
  if (y >= 440) {
    document.querySelector('#slogan-1').classList.add('animate__fadeInRight');
  }
  if (y >= 700) {
    document.querySelector('#slogan-2').classList.add('animate__fadeInLeft');
  }
  if (y >= 900) {
    document.querySelector('#slogan-3').classList.add('animate__fadeInRight');
  }
  if (y >= 900) {
    document.querySelector('#slogan-4').classList.add('animate__fadeInRight');
  }
  if (y >= 900) {
    document.querySelector('#slogan-5').classList.add('animate__fadeInRight');
  }
  if (y >= 900) {
    document.querySelector('#slogan-6').classList.add('animate__fadeInRight');
  }
});
