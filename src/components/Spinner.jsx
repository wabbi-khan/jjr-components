import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Spinner = ({ loading }) => {
  return (
    <div className="spinner">
      <ScaleLoader color="##de0000" loading={loading} size={150} />
    </div>
  );
};

export default Spinner;
