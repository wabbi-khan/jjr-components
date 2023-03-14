import React, { useState, useEffect, useRef } from 'react';
import Slider from './Slider';
import { dataWorld } from '../data/data';
import { MdClose } from 'react-icons/md';
import Header from './Header';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import CopyRight from './CopyRight';
// import audio1 from '../audioPlay/1.wav';
import audio1 from '../audioPlay/loopAudio.mp3';
import WhatsappIcon from './WhatsappIcon';
const Home = () => {
  // ======= for stope the video

  const videoRef = useRef(null);

  const handleVideoClose = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.src = '';
    setModel(false);
  };
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
    setTemImgSrc(imgUrl);
    setModel(true);
  };

  return (
    <>
      <Header />
      {/* =========== Slider =================== */}
      {/* <img src={temImgSrc} alt="temImgSrc" /> */}
      <div
        className={model ? 'model open' : 'model'}
        // onClick={handleVideoClose}
      >
        <video ref={videoRef} src={temImgSrc} autoPlay controls />
        <MdClose
          className="closeIcon"
          onClick={() => {
            setModel(false);
            setIsPlaying(false);
            handleVideoClose();
          }}
        />
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
            displayFullVideo={() => getImg(world?.videoUrl)}
            handleClick3={() => setActive(false)}
            stopBackgroundAudio={() => setIsPlaying(true)}
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
