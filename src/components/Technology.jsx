import React, { useState } from 'react';
import Header from './Header';
// import image1 from '../assets/Screenshot (29).png';
import { technology } from '../data/data';
import CopyRight from './CopyRight';
import { MdClose } from 'react-icons/md';
// import { motion } from 'framer-motion';
const Technology = () => {
  const [model, setModel] = useState();
  const [temImgSrc, setTemImgSrc] = useState('');
  const getImg = (imgUrl) => {
    console.log(imgUrl);
    setTemImgSrc(imgUrl);
    setModel(true);
  };
  return (
    <section>
      <Header />
      <div className={model ? 'model open' : 'model'}>
        <img src={temImgSrc} alt="temImgSrc" />
        <MdClose className="closeIcon" onClick={() => setModel(false)} />
      </div>
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>TECHNOLOGY</h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="eventCard">
        <div className="main-card-set">
          {technology.map((item, index) => (
            <div className="card--xcl" key={index}>
              <img
                onClick={() => getImg(item?.techImg)}
                src={item?.techImg}
                alt="Technology img"
                className="card__img--xcl"
              />
              <span className="card__footer--xcl">
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
