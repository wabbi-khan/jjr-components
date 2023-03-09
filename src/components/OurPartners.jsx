import React from 'react';
import Header from './Header';
import { partnersLogo } from '../data/data';
import CopyRight from './CopyRight';
const OurPartners = () => {
  return (
    <section>
      <Header />
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>
            OUR <b>PARTNERS</b>
          </h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>

      <div className="logoSection">
        {partnersLogo.map((item, index) => (
          //<div className="col-md-3 col-xs-6 py-3 d-flex justify-content-center align-items-center customClass">
          <div className={`logoBg ${item.class}`} key={index}>
            <img src={item.logo} alt="our partners logo" />
          </div>
          //</div>
        ))}
      </div>
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default OurPartners;
