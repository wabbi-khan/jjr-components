import React from "react";
import { Link, useParams } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { dataWorld } from "../data/data";

const Swipe = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      {dataWorld
        .filter((index) => index.id === id)
        .map((item) => (
          <div className='SwipeVideo' key={item.id}>
            <Link to={"/"}>
              <MdClose className='SwipeVideoIcone' />
            </Link>
            <video src={item.videoUrl} controls autoPlay playsInline />
          </div>
        ))}
    </div>
  );
};
export default Swipe;
