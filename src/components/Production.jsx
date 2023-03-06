import React, { useState } from 'react';
import Header from './Header';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import { productionData } from '../data/production';
import CopyRight from './CopyRight';
const Production = () => {
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
        {/* <video src={temImgSrc} autoPlay muted controls /> */}
        <MdClose className="closeIcon" onClick={() => setModel(false)} />
      </div>
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>Production</h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="eventCard">
        <div className="main-card-set pb-4">
          {productionData.map((item, index) => (
            <motion.div whileHover={{ y: -10 }} className="card" key={index}>
              <img
                onClick={() => getImg(item?.eventImg)}
                src={item?.eventImg}
                alt="Event production images"
                className="card__img"
              />
              <span className="card__footer">
                <span>{item?.eventName}</span>
              </span>
            </motion.div>
          ))}
        </div>
        <CopyRight additionalClass={'copyRight'} />
      </div>
    </section>
  );
};

export default Production;
