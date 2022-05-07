const Slogan = ({ id, i, title, description }) => {
  return (
    <div
      id={id}
      className="services-card animate__animated col-12 col-lg-4 mt-4"
    >
      <i className={i}></i>
      <h4 className="service-card-title mt-3">{title}</h4>
      <p className="service-description mt-3">{description}</p>
    </div>
  );
};
export default Slogan;
