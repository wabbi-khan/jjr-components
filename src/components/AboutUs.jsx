import React from 'react';
import Header from './Header';
import CopyRight from './CopyRight';

const AboutUs = () => {
  return (
    <section>
      <Header />
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>ABOUT US</h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="aboutUs"></div>
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default AboutUs;
