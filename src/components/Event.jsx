import React from 'react';
import Header from './Header';
// import image1 from '../assets/Screenshot (29).png';
import { eventProduction } from '../data/data';
import CopyRight from './CopyRight';

const Event = ({ eventImg, eventName }) => {
  return (
    <section>
      <Header />
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>EVENT PRODUCTION</h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="eventCard">
        <div class="main-card-set">
          {eventProduction.map((item, index) => (
            <div class="card" key={index}>
              <img
                src={item?.eventImg}
                alt="Event production images"
                class="card__img"
              />
              <span class="card__footer">
                <span>{item?.eventName}</span>
              </span>
            </div>
          ))}
        </div>
        <CopyRight additionalClass={'copyRight'} />
      </div>
    </section>
  );
};

export default Event;
