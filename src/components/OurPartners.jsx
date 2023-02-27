import React from 'react';
import Header from './Header';
import Logo1 from '../assets/jjr_logo/logo1.png';
// import Logo2 from '../assets/jjr_logo/logo2.png';
// import Logo3 from '../assets/jjr_logo/logo3.png';
// import Logo4 from '../assets/jjr_logo/logo4.png';
// import Logo5 from '../assets/jjr_logo/logo5.png';
// import Logo6 from '../assets/jjr_logo/logo6.png';
import { partnersLogo } from '../data/data';
const OurPartners = () => {
  return (
    <section>
      <Header />
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>OUR PARTNERS</h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      {/* <div className="logoSection">
        {partnersLogo.map((item, index) => (
          <div className="logoADS" key={index}>
            <img src={item.logo} alt="our partner logo" />
          </div>
        ))}
      </div> */}
      <div className="logoSection">
        {partnersLogo.map((item, index) => (
          <div className="logoBg" key={index}>
            <img src={item.logo} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
