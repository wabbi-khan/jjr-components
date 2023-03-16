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
                  alt="jjrAboutImg"
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
                    Quality is the Best{' '}
                    <span className="primary-color italic">Business</span> Plan
                    {/* Business Performance
                    <span className="primary-color italic"> improve </span>
                    Drastically */}
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
                      <img
                        src="https://res.cloudinary.com/xcltech/image/upload/v1678963676/jjr%20photos/Founder%20images/founder_bykmkn.jpg"
                        alt="Auother"
                      />
                    </div>
                    <div className="sc-auother-content">
                      <div className="sc-auother-text">
                        Johnny Rizkallah <br />
                        <span>Founder</span>
                      </div>
                      <p
                        className="des position-relative"
                        style={{ zIndex: '1' }}
                      >
                        We believe that success is achieved through hard work,
                        dedication, consistency, and innovation. We are
                        committed to providing our clients with the highest
                        quality of products and services, and always striving to
                        find new and better ways to meet their needs.
                      </p>
                    </div>
                  </div>
                  <div className="sc-shape-icon">
                    <img src={Img4} alt="Icon" />
                  </div>
                </div>

                <div className="row sc-mb-30 py-3">
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
                <div className="sc-auother-style-box sc-mb-30">
                  <div className="sc-auother-style d-flex align-items-center">
                    <div className="sc-auother-image sc-mr-20 ladyIcon">
                      <img
                        src="https://res.cloudinary.com/xcltech/image/upload/v1678963792/jjr%20photos/Founder%20images/woman_xj2j6i.png"
                        alt="Auother"
                      />
                    </div>
                    <div className="sc-auother-content">
                      <div className="sc-auother-text">
                        Jennifer Moaccadie Rizkallah <br />
                        <span>Co-Founder</span>
                      </div>
                      <p
                        className="des position-relative"
                        style={{ zIndex: '1' }}
                      >
                        Through perseverance and passion grew JJR NETWORK to
                        where it is today. However, the core essence of this
                        company will always be and remain a family business.
                        Loyalty being our constant value is reciprocally
                        returned by our clients… And that is priceless.
                      </p>
                    </div>
                  </div>
                  <div className="sc-shape-icon">
                    <img src={Img4} alt="Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 ">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="sc-heading-area sc-mb-55 sc-md-mb-35 text-center">
              {/* <span className="sub-title customHeading justify-content-center">
                <div className="icon-line">
                  <TiWavesOutline />
                </div>
                Work Process
              </span> */}
              <h2 className="title">
                Our
                <span className="primary-color italic"> Services </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceCard.map((item, index) => (
            <div className="col-lg-4 col-md-6 mt-5 sm-mb-20" key={index}>
              <div className="addon-services">
                <div className="services-icon">
                  <img src={item?.icon} alt="images" />
                </div>
                <div className="services-text">
                  <h2 className="title">{item.title}</h2>
                  <p className="services-txt">{item.para}</p>
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
