import React from 'react';
import Header from './Header';
import Billi from '../assets/billi.jpg';
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
      <div className="testi">
        <div class="div1 eachdiv">
          <div class="userdetails">
            <div class="imgbox">
              <img
                src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg"
                alt=""
              />
            </div>
            <div class="detbox">
              <p class="name">Daniel Clifford</p>
              <p class="designation">Verified Graduate</p>
            </div>
          </div>
          <div class="review">
            <h4>
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </h4>
            <p>
              “ I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </p>
          </div>
        </div>
      </div>
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default Testimonials;
