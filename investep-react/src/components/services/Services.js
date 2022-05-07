import servicesData from './ServicesData';
import Slogan from './Slogan';

const Services = () => {
  return (
    <div className="container services mt-3">
      <h1 className="service-title">HİZMETLERİMİZ</h1>
      <div className="services-wrapper row">
        {servicesData.map((service, key) => (
          <Slogan
            key={key}
            id={service.id}
            i={service.i}
            title={service.title}
            description={service.description}
          ></Slogan>
        ))}
      </div>
    </div>
  );
};
export default Services;
