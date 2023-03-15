import React from 'react';
import { ScaleLoader } from 'react-spinners';
import Logo from '../assets/logo';
const Spinner = ({ loading }) => {
  return (
    <div className="spinner">
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div>
        <ScaleLoader color="##de0000" loading={loading} size={150} />
      </div>
    </div>
  );
};

export default Spinner;
