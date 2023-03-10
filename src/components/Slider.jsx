import React from 'react';
import { motion } from 'framer-motion';

// import IMG from '../assets/billi.jpg';
const Slider = ({
  id,
  // imgUrl,
  active,
  // deactive,
  video,
  handleClick,
  handleClick2,
  handleClick3,
  // autoPlay,
  imgUrl,
}) => {
  return (
    <motion.div
      className={` ${active === id ? 'whenHover' : 'cover'}  `}
      onMouseEnter={() => handleClick(id)}
      onMouseLeave={handleClick3}
      onClick={handleClick2}
    >
      <video
        src={video}
        muted
        controls
        autoPlay
        onMouseEnter={(event) => event.target.play(id)}
        onMouseOut={(event) => event.target.pause(id)}
      />
      <img src={imgUrl} alt="images" />
    </motion.div>
  );
};

export default Slider;
