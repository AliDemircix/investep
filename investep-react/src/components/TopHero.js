const TopHero = () => {
  return (
    <div className="container text-center top-hero">
      <h1 className="animate__animated animate__bounceInDown">
        <b>INVESTEP</b> CAPITAL
      </h1>
      <div className="d-flex justify-content-center mt-4">
        <p id="we-invest" className="animate__animated animate__bounceInLeft">
          We invest
        </p>
        <div id="hero-text" className="flex-column text-left ml-3">
          <p className="animate__animated animate__bounceInRight">
            In The Future
          </p>
          <p className="animate__animated animate__bounceInRight">
            In The Blockchain
          </p>
        </div>
      </div>
    </div>
  );
};
export default TopHero;
