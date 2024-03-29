/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'; // { useState }
import Header from './Header';
import CopyRight from './CopyRight';
import WhatsappIcon from './WhatsappIcon';

import {
  // techData,
  techVideo,
} from '../data/data';
// import { MdClose } from 'react-icons/md';

const Technology = () => {
  // const [model, setModel] = useState();
  // const [temImgSrc, setTemImgSrc] = useState('');
  // const getImg = (imgUrl) => {
  //   console.log(imgUrl);
  //   setTemImgSrc(imgUrl);
  //   setModel(true);
  // };
  return (
    <section>
      <Header />
      {/* <div className={model ? 'model open' : 'model'}>
        <img src={temImgSrc} alt="temImgSrc" />
        <MdClose className="closeIcon" onClick={() => setModel(false)} />
      </div> */}
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>technology</h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="eventCard">
        <div className="container">
          <div className="row">
            {techVideo.map((item) => (
              <div className="col-md-4">
                <div
                  id={item.id}
                  className="carousel slide"
                  // data-ride="carousel"
                  // data-interval="false"
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

                    <span className="card__footer">
                      <span>{item.eventName}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* {techData.map((item) => (
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
                        <img
                          onClick={() => getImg(item?.img1)}
                          src={item?.img1}
                          alt="Technologies images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img2)}
                          src={item?.img2}
                          alt="Technologies images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img3)}
                          src={item?.img3}
                          alt="Technologies images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <span className="card__footer">
                      <span>{item.techName}</span>
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
            ))} */}
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

export default Technology;
