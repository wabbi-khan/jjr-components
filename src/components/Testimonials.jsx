import React from 'react';
import Header from './Header';
import CopyRight from './CopyRight';

const Testimonials = () => {
  return (
    <section>
      <Header />
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>TESTIMONIALS</h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="testi"></div>
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default Testimonials;
