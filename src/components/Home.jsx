import React, {
  useState,
  // useEffect
} from 'react';
import Slider from './Slider';
import { dataWorld } from '../data/data';
import { MdClose } from 'react-icons/md';
import Header from './Header';
import { HiSpeakerWave } from 'react-icons/hi2';
import CopyRight from './CopyRight';
const Home = () => {
  const [active, setActive] = useState();
  // const [deactive, setDeActive] = useState();
  const [model, setModel] = useState(false);
  const [temImgSrc, setTemImgSrc] = useState('');
  const getImg = (imgUrl) => {
    console.log(imgUrl);
    setTemImgSrc(imgUrl);
    setModel(true);
  };

  // spinner

  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 10000);
  // }, []);
  return (
    <>
      <Header />
      {/* =========== Slider =================== */}
      <div className={model ? 'model open' : 'model'}>
        {/* <img src={temImgSrc} alt="temImgSrc" /> */}
        <video src={temImgSrc} autoPlay muted controls />
        <MdClose className="closeIcon" onClick={() => setModel(false)} />
      </div>
      {/* {loading ? (
        <Spinner loading={loading} />
      ) : ( */}
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
      {/* )} */}
      <div className="features">
        <div className="soundIcon">
          <HiSpeakerWave />
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
