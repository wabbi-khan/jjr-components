import React from 'react';
// import Whatsapp from '../assets/whatsapp.png';
import { IoLogoWhatsapp } from 'react-icons/io';
const WhatsappIcon = () => {
  return (
    <div className="whatsappIcon">
      <a href="https://wa.me/00971503528866" target={'_blank'} rel="noreferrer">
        <IoLogoWhatsapp />
      </a>
      {/* <img src={Whatsapp} alt="whatsapp icon" /> */}
    </div>
  );
};

export default WhatsappIcon;
