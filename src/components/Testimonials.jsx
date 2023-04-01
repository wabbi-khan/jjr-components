import React from 'react';
import Header from './Header';
import CopyRight from './CopyRight';
import { tesiData } from '../data/data';
import WhatsappIcon from './WhatsappIcon';

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
      <div className="testi py-5">
        <div className="container">
          <div className="testimonial-view">
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                {tesiData.map((item, index) => (
                  <div className={`carousel-item ${item.active}`} key={index}>
                    <div className="testimonial-block">
                      <div className="testimonial-block_user">
                        <div className="testimonial-block_user_image">
                          <img src={item?.imgUrl} alt="User" />
                        </div>
                        <div className="testimonial-block_user_info">
                          <h2 className="testimonial-block_user_info_name">
                            {item.name}
                          </h2>
                          <h4>{item.job}</h4>
                        </div>
                      </div>
                      <div className="testimonial-block_content">
                        <p>{item.review}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                className="carousel-control-prev prev-Icon"
                href="#testimonialCarousel"
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
                className="carousel-control-next next-Icon"
                href="#testimonialCarousel"
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
        </div>
      </div>
      <div className="fixWhatsapp">
        <WhatsappIcon />
      </div>
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default Testimonials;
