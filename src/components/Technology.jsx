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
            <a href="/" class="card" key={index}>
              <img
                src={item?.techImg}
                alt="Technology images"
                class="card__img"
              />
              <span class="card__footer">
                <span>{item?.techName}</span>
              </span>
            </a>
          ))}
        </div>
        <CopyRight additionalClass={'copyRight'} />
      </div>
    </section>
  );
};

export default Technology;
