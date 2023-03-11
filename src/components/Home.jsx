import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import { dataWorld } from '../data/data';
import { MdClose } from 'react-icons/md';
import Header from './Header';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import CopyRight from './CopyRight';
// import audio1 from '../audioPlay/1.wav';
import audio1 from '../audioPlay/ambience_loop2.mp3';
import WhatsappIcon from './WhatsappIcon';
const Home = () => {
  // ====== audio play when evere the home page load
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = document.getElementById('myAudio');
    // audio.volume = 0.2;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = document.getElementById('myAudio');
    // audio.volume = 2;
    audio.play();
  }, []);
  // ======================

  // ==========================
  const [active, setActive] = useState();
  const [model, setModel] = useState();
  const [temImgSrc, setTemImgSrc] = useState('');
  const getImg = (imgUrl) => {
    console.log(imgUrl);
    setTemImgSrc(imgUrl);
    setModel(true);
  };

  return (
    <>
      <Header />
      {/* =========== Slider =================== */}
      <div className={model ? 'model open' : 'model'}>
        {/* <img src={temImgSrc} alt="temImgSrc" /> */}
        <video src={temImgSrc} autoPlay muted controls />
        <MdClose className="closeIcon" onClick={() => setModel(false)} />
      </div>
      <div className="outPartnersHeading">
        <div className="heading-sec-new">
          <h1>
            FEATURE <b> Work</b>
          </h1>
          <div className="border-sec-new">
            <strong></strong>
          </div>
        </div>
      </div>
      <div className="allItems">
        {dataWorld.map((world, index) => (
          <Slider
            key={world?.id}
            {...world}
            index={index}
            active={active}
            video={world?.videoUrl}
            imgUrl={world.imgUrl}
            handleClick={setActive}
            handleClick2={() => getImg(world?.videoUrl)}
            handleClick3={() => setActive(false)}
          />
        ))}
      </div>
      <div className="features">
        <div className="soundIcon">
          <div>
            <audio id="myAudio" autoPlay={true} loop={true} src={audio1} />
            <div onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <HiSpeakerXMark style={{ cursor: 'pointer' }} />
              ) : (
                <HiSpeakerWave style={{ cursor: 'pointer' }} />
              )}
            </div>
          </div>
        </div>
        <div className="ml-4">
          <div className="footerDesktopView">
            <CopyRight additionalClass={'copyRight'} />
          </div>
        </div>
        <div className="mb-2">
          <WhatsappIcon />
        </div>
      </div>
      <div className="footerMobView">
        <CopyRight additionalClass={'copyRight'} />
      </div>
    </>
  );
};

export default Home;
