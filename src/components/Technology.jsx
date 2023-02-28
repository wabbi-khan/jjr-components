import React from 'react';
import Header from './Header';
// import image1 from '../assets/Screenshot (29).png';
import { technology } from '../data/data';
import CopyRight from './CopyRight';

const Technology = () => {
  return (
    <section>
      <Header />
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>TECHNOLOGY</h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="eventCard">
        <div class="main-card-set">
          {technology.map((item, index) => (
            <div class="card--xcl">
              <img
                src={item?.techImg}
                alt="balloon with an emoji face"
                class="card__img--xcl"
              />
              <span class="card__footer--xcl">
                <span>{item?.techName}</span>
              </span>
            </div>
          ))}
        </div>
        <CopyRight additionalClass={'copyRight'} />
      </div>
    </section>
  );
};

export default Technology;
