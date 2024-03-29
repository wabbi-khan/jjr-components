/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from './Header';
import CopyRight from './CopyRight';
import { allVideosData } from '../data/data';
import WhatsappIcon from './WhatsappIcon';

const AllVideos = () => {
  return (
    <section>
      <Header />
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>
            our <b>work</b>
          </h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="eventCard">
        <div className="container">
          <div className="row">
            {allVideosData.map((item) => (
              <div className="col-md-4">
                <div
                  id={item.id}
                  className="carousel slide"
                  data-ride="carousel"
                  data-interval="false"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <a className="card">
                        <video
                          className="card__img pb-3"
                          src={item.video1}
                          controls
                          autoplay
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <video
                          className="card__img pb-3"
                          src={item.video2}
                          controls
                          autoplay
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <video
                          className="card__img pb-3"
                          src={item.video3}
                          controls
                          autoplay
                        />
                      </a>
                    </div>
                    <span className="card__footer">
                      <span>{item.eventName}</span>
                    </span>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href={`#${item.id}`}
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href={`#${item.id}`}
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixWhatsapp">
        <WhatsappIcon />
      </div>
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default AllVideos;
