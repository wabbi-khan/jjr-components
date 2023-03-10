import React from 'react';
import Header from './Header';
import CopyRight from './CopyRight';
import Img1 from '../assets/GKyZBZXafr9t.jpg';
import Img2 from '../assets/4o0xW9tGpoKY.jpg';
import Img3 from '../assets/IM9p2tG5FVyf.png';
import Img4 from '../assets/ChUPWrwRvbdZ.png';
import Img5 from '../assets/DI81XriUmvs7.jpg';
import { serviceCard } from '../data/data';
import { TiWavesOutline } from 'react-icons/ti';

const AboutUs = () => {
  return (
    <section>
      <Header />
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>
            ABOUT <b>us</b>
          </h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="sc-about-area sc-about-section-three py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="sc-about-group-image">
                <img src={Img1} className="img-fluid" alt="" />
                <img className="sc-group" src={Img2} alt="" />
                <div className="sc-about-text-box">
                  <div className="sc-about-text text-center">
                    <div className="sc-icon sc-mb-20">
                      <i className="icon-happy2"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="jjrAboutImg">
                <img
                  src="https://res.cloudinary.com/xcltech/image/upload/v1678273566/jjr%20photos/Picture2_ds7glx.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sc-about-content-style">
                <div className="sc-heading-area">
                  <span className="sub-title customHeading">
                    <div className="icon-line">
                      <TiWavesOutline />
                    </div>
                    <div className="aboutHeading">Who We Are</div>
                  </span>
                  <h2 className="title">
                    Business Performance
                    <span className="primary-color italic"> improve </span>
                    Drastically
                  </h2>
                  <p className="aboutPara">
                    Welcome to JJR NETWORK, a multi-faceted servicing company
                    providing our clients with state-of-the-art on ground
                    technology activations, events production, below the line
                    promotional items and innovative branding.
                  </p>{' '}
                  <p className="aboutPara">
                    JJR NEWTORK displays a balance between traditional servicing
                    and product customization. With simultaneous access to Asia
                    & Europe and our own in-house production warehouse, We
                    provide riveting, tailored BTL, and on-ground activity
                    solutions that will make you stand out from your
                    competition.
                  </p>
                  <p className="aboutPara">
                    Our passion, creativity and attention to detail will give
                    your brand that special twist that will make you stand out
                    from the crowd all while preserving your core brand values.
                    We take pride in our high client retention rate as this is
                    the ultimate attestation of JJR NETWORK’s client servicing
                    proficiency.
                  </p>
                </div>
                <div className="sc-auother-style-box sc-mb-30">
                  <div className="sc-auother-style d-flex align-items-center">
                    <div className="sc-auother-image sc-mr-20">
                      <img src={Img3} alt="Auother" />
                    </div>
                    <div className="sc-auother-content">
                      <div className="sc-auother-text">
                        Forman Cobid, <span>Founder</span>
                      </div>
                      <p
                        className="des position-relative"
                        style={{ zIndex: '1' }}
                      >
                        Grass face saw beginning meat fod creeping eaven
                        dominion intercom created behold
                      </p>
                    </div>
                  </div>
                  <div className="sc-shape-icon">
                    <img src={Img4} alt="Icon" />
                  </div>
                </div>
                <div className="row sc-mb-30 mt-5">
                  <div className="col-lg-8">
                    <div className="sc-description">
                      <p className="des">
                        In order to satisfy and exceed our esteemed clients
                        expectations we, at JJR NETWORK, are committed to ensure
                        the latest advanced technologies needed to turn your
                        campaign into a success.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="sc-ab-image text-end text-md-start">
                      <img src={Img5} alt="About" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 ">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div class="sc-heading-area sc-mb-55 sc-md-mb-35 text-center">
              <span class="sub-title customHeading justify-content-center">
                <div className="icon-line">
                  <TiWavesOutline />
                </div>
                Work Process
              </span>
              <h2 class="title">
                From Strategy to Delivery
                <span class="primary-color italic"> Services </span>Every Time
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          {serviceCard.map((item, index) => (
            <div class="col-lg-4 col-md-4 mt-5 sm-mb-20" key={index}>
              <div class="addon-services">
                <div class="services-icon">
                  <img src={item?.icon} alt="images" />
                </div>
                <div class="services-text">
                  <h2 class="title">{item.title}</h2>
                  <p class="services-txt">{item.para}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default AboutUs;
