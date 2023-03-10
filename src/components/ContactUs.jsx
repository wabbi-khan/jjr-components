import React from 'react';
import Header from './Header';
import CopyRight from './CopyRight';
const ContactUs = () => {
  return (
    <section>
      {' '}
      <Header />
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>
            CONTACT <b>us</b>
          </h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="contactUsForm">
        <div className="contact--form">
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Address</div>
                <div className="text-one">
                  Emirates Towers | Level 41 Tel: +971 4 319 7553 Dubai, United
                  Arab Emirates
                </div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+971 4319 7553</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">info@jjrnetwork.com</div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Send us a message</div>
              <form action="#">
                <div className="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div className="input-box message-box">
                  <textarea placeholder="Enter your message"></textarea>
                </div>
                <div className="button">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default ContactUs;
