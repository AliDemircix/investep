import aboutUsContent from './AboutUsData';
import AboutUsP from './AboutUsP';

const AboutUs = () => {
  return (
    <div className="about-us">
      {aboutUsContent.map((text, index) => (
        <AboutUsP content={text} key={index}></AboutUsP>
      ))}
    </div>
  );
};
export default AboutUs;
