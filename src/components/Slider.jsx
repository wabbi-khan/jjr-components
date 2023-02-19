import React from 'react';
// import IMG from '../assets/billi.jpg';
const Slider = ({
  id,
  imgUrl,
  active,
  // deactive,
  video,
  handleClick,
  handleClick2,
  // handleClick3,
  // autoPlay,
}) => {
  return (
    <div
      className={` ${active === id ? 'asd' : 'cover'}  slider`}
      onMouseEnter={() => handleClick(id)}
      // onMouseOut={() => handleClick3(id)}
      onClick={handleClick2}
    >
      <div className="sliderList">
        <video
          src={video}
          muted
          onMouseEnter={(event) => event.target.play(id)}
          onMouseOut={(event) => event.target.pause(id)}
        />
        {/* <img
          src={imgUrl}
          alt=""
          
        /> */}
      </div>
    </div>
  );
};

export default Slider;
