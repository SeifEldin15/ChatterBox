import React from 'react'
import './ContinueBtn.css';

const ContinueBtn = ({ onClick }) => {
  return (
    <button className='ContinueBtn' onClick={onClick}>
      Continue
    </button>
  );
};


export default ContinueBtn
