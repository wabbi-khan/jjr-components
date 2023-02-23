import React from "react";
import { motion } from "framer-motion";

// import IMG from '../assets/billi.jpg';
const Slider = ({
  id,
  imgUrl,
  active,
  deactive,
  video,
  handleClick,
  handleClick2,

  handleClick3,
  autoPlay,
}) => {
  return (
    <motion.div
      className={` ${active === id ? "asd" : "cover"}  `}
      onMouseEnter={() => handleClick(id)}
      onMouseLeave={handleClick3}
      onClick={handleClick2}
    >
      {/* <div className="sliderList"> */}
      <video
        webkit-playsinline
        playsinline
        src={video}
        muted
        autoplay
        onMouseEnter={(event) => event.target.play(id)}
        onMouseOut={(event) => event.target.pause(id)}
      />
      {/* <img src={imgUrl} alt="" /> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Slider;
