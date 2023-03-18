/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const CopyRight = ({ additionalClass }) => {
  return (
    <div className={additionalClass}>
      © JJR NETWORK 2023 - All Right Reserved <br />
      <span>
        Powered by{' '}
        <a href="https://xcltechnologies.com/" target={'blank'}>
          Xcl Technologies
        </a>
      </span>
    </div>
  );
};

export default CopyRight;
