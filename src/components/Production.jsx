/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Header from './Header';
import CopyRight from './CopyRight';
import {
  productionAllData,
  noorRiyadh,
  styrofoamExecution,
} from '../data/data';
import { MdClose } from 'react-icons/md';

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
        <MdClose className="closeIcon" onClick={() => setModel(false)} />
      </div>
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>production</h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <span className="proPoints py-4">
              Stands, Kiosks, Fit-Outs, Signages, POS Materials, Creative
              Styrofoam
            </span>
          </div>
        </div>
      </div>
      <div className="eventCard">
        <div className="container">
          <div className="row">
            {noorRiyadh.map((item) => (
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
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img2)}
                          src={item?.img2}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img3)}
                          src={item?.img3}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img4)}
                          src={item?.img4}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img5)}
                          src={item?.img5}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img6)}
                          src={item?.img6}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img7)}
                          src={item?.img7}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img8)}
                          src={item?.img8}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img9)}
                          src={item?.img9}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img10)}
                          src={item?.img10}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img11)}
                          src={item?.img11}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img12)}
                          src={item?.img12}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img13)}
                          src={item?.img13}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img14)}
                          src={item?.img14}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img15)}
                          src={item?.img15}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img16)}
                          src={item?.img16}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img17)}
                          src={item?.img17}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img18)}
                          src={item?.img18}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img19)}
                          src={item?.img19}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img20)}
                          src={item?.img20}
                          alt="Production images"
                          className="card__img"
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
            {styrofoamExecution.map((item) => (
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
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img2)}
                          src={item?.img2}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img3)}
                          src={item?.img3}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img4)}
                          src={item?.img4}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img5)}
                          src={item?.img5}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img6)}
                          src={item?.img6}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img7)}
                          src={item?.img7}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img8)}
                          src={item?.img8}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img9)}
                          src={item?.img9}
                          alt="Production images"
                          className="card__img"
                        />
                      </a>
                    </div>{' '}
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
            {productionAllData.map((item) => (
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
                          alt="Event Activation images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img2)}
                          src={item?.img2}
                          alt="Event Activation images"
                          className="card__img"
                        />
                      </a>
                    </div>
                    <div className="carousel-item">
                      <a className="card">
                        <img
                          onClick={() => getImg(item?.img3)}
                          src={item?.img3}
                          alt="Event Activation images"
                          className="card__img"
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
      <CopyRight additionalClass={'copyRight'} />
    </section>
  );
};

export default Production;
