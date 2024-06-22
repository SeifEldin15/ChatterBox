// Links.js
import React from 'react';
import './Links.css'

const Links = ({ items }) => {
  return (
    <ul className='Links'>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Links;
