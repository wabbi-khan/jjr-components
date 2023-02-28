import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import { dataWorld } from '../data/data';
import { MdClose } from 'react-icons/md';
import Header from './Header';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';
import CopyRight from './CopyRight';

// import { Howl, Howler } from 'howler';
import audio1 from '../audioPlay/1.wav';
const Home = () => {
  // ======audio=========
  const [playing, setPlaying] = useState(false);
  const player = new Audio(audio1);
  useEffect(() => {
    playing ? player.pause() : player.play();

    // This is cleanup of the effect
    return () => player.pause();
  }, [playing]);

  function togglePlay() {
    // Using the callback version of `setState` so you always
    // toggle based on the latest state
    setPlaying((s) => !s);
  }
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
      <div className="allItems">
        {dataWorld.map((world, index) => (
          <Slider
            key={world?.id}
            {...world}
            index={index}
            active={active}
            video={world?.imgUrl}
            // deactive={deactive}
            handleClick={setActive}
            handleClick2={() => getImg(world?.imgUrl)}
            handleClick3={() => setActive(false)}
          />
        ))}
      </div>
      <div className="features">
        <div className="soundIcon">
          {/* <HiSpeakerWave style={{ cursor: 'pointer' }} /> */}
          <div onClick={() => togglePlay()}>
            {playing ? (
              <HiSpeakerXMark style={{ cursor: 'pointer' }} />
            ) : (
              <HiSpeakerWave style={{ cursor: 'pointer' }} />
            )}
          </div>
        </div>
        <div>
          <h2>
            Feature <b> Work</b>
          </h2>
        </div>
        <div></div>
      </div>
      <CopyRight additionalClass={'copyRight'} />
    </>
  );
};

export default Home;
