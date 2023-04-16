import React from "react";
import { useParams } from "react-router-dom";
import { MdClose } from "react-icons/md";

const Swipe = () => {
  const { videoUrl } = useParams();
  console.log(videoUrl);

  return (
    <div>
      <h1>wahabbb</h1>
      <video src={videoUrl} autoPlay controls />
      <MdClose className='closeIcon' />
    </div>
  );
};

export default Swipe;
