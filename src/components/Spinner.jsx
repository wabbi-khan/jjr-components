import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const Spinner = ({ loading }) => {
  return (
    <div className="spinner">
      <FadeLoader
        color={'#de0000'}
        loading={loading}
        size={150}
        className="spinner"
      />
    </div>
  );
};

export default Spinner;
