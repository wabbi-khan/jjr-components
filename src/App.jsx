import './App.css';
import Slider from './components/Slider';
import { dataWorld } from './data/data.js';
import { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import Header from './components/Header';
import Spinner from './components/Spinner';
function App() {
  const [active, setActive] = useState();
  // const [deactive, setDeActive] = useState();
  const [model, setModel] = useState(false);
  const [temImgSrc, setTemImgSrc] = useState('');
  const getImg = (imgSrc) => {
    // console.log(imgSrc);
    setTemImgSrc(imgSrc);
    setModel(true);
  };

  // spinner

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <>
      <Header />
      {/* =========== Slider =================== */}
      <div className={model ? 'model open' : 'model'}>
        {/* <img src={temImgSrc} alt="temImgSrc" /> */}
        <video src={temImgSrc} autoPlay muted />
        <MdClose className="closeIcon" onClick={() => setModel(false)} />
      </div>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="allItems">
          {dataWorld.map((world, index) => (
            <Slider
              key={world.id}
              {...world}
              index={index}
              active={active}
              video={world.imgUrl}
              // deactive={deactive}
              handleClick={setActive}
              handleClick2={() => getImg(world?.imgUrl)}
              // handleClick3={setDeActive}
            />
          ))}
        </div>
      )}
      <div className="copyRight">© 2023 | Developed By XCL Technologies</div>
    </>
  );
}

export default App;
