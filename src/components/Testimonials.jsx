import React from 'react';
import Header from './Header';
import CopyRight from './CopyRight';
// import Img1 from '../assets/GKyZBZXafr9t.jpg';
import { tesiData } from '../data/data';
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
                {/* <div className="carousel-item active">
                  <div className="testimonial-block">
                    <div className="testimonial-block_user">
                      <div className="testimonial-block_user_image">
                        <img src={Img1} alt="User" />
                      </div>
                      <div className="testimonial-block_user_info">
                        <h2 className="testimonial-block_user_info_name">
                          John Doe
                        </h2>
                        <h4>Customer</h4>
                      </div>
                    </div>
                    <div className="testimonial-block_content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Corporis consequuntur repellendus nemo suscipit
                        explicabo veniam similique quaerat vitae! Alias
                        reprehenderit aliquam temporibus porro iste corrupti
                        laboriosam nihil eos? Nemo ratione, provident! Suscipit,
                        accusantium. Molestias, reiciendis, in nihil perferendis
                        similique voluptas aliquam, nisi consectetur eum, atque
                        nemo sint. Nostrum, reprehenderit, quod.
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
              <a
                className="carousel-control-prev"
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
                className="carousel-control-next"
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
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default Testimonials;
