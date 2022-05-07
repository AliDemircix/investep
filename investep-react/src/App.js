import './App.css';
import AboutUs from './components/aboutUs/AboutUs';
import JoinUsBtn from './components/JoinUsBtn';
import Nav from './components/Nav';
import Services from './components/services/Services';
import TopHero from './components/TopHero';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const position = () => {
    const reveals = document.querySelectorAll('.animate__animated');
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
  // document.addEventListener('DOMContentLoaded', function () {
  //   const splide = new Splide('.splide', {
  //     type: 'loop',
  //     drag: 'free',
  //     focus: 'center',
  //     perPage: 10,
  //     breakpoints: {
  //       640: {
  //         perPage: 4,
  //       },
  //     },
  //     autoScroll: {
  //       speed: 1.3,
  //     },
  //     pagination: false,
  //     arrows: false,
  //   });

  //   splide.mount(window.splide.Extensions);
  // });
  return (
    <>
      <Nav></Nav>
      <main>
        <TopHero></TopHero>
        <div className="p-0">
          <JoinUsBtn></JoinUsBtn>
          <AboutUs></AboutUs>
          <Services></Services>
        </div>
      </main>
    </>
  );
}

export default App;
