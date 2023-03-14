import React from 'react';
// import { motion } from 'framer-motion';
const Slider = ({
  id,
  active,
  video,
  handleClick,
  displayFullVideo,
  handleClick3,
  stopBackgroundAudio,
  imgUrl,
}) => {
  return (
    <div onClick={stopBackgroundAudio}>
      <div
        className={` ${active === id ? 'whenHover' : 'cover'}  `}
        onMouseEnter={() => handleClick(id)}
        onMouseLeave={handleClick3}
        onClick={displayFullVideo}
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
      </div>
    </div>
  );
};

export default Slider;
