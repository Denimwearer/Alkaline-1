const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerItem">
        <img className="footerImage"src="drink.jpeg" alt="drink" objectFit="cover" layout="fill"></img>
      </div>
      <div className="footerItem">
        <div className="footerCard">
          <h2 className="footerMotto">
            1st Alkaline Cafe
          </h2>
        </div>
        <div className="footerCard">
          <h1 className="footerTitle">OUR RESTAURANT</h1>
          <p className="footerText">2821 N 24th St.
            <br /> Phoenix, AZ 85008
            <br /> (470)-869-7559
          </p>
        </div>
        <div className="footerCard">
          <h1 className="footerTitle">WORKING HOURS</h1>
          <p className="footerText">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className="footerText">
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
