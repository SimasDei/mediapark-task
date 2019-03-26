import React from 'react';
// import image from '../assets/dog.jpg';

const Image = props => {
  return (
    <div className="image__container">
      <img className="image__img" src={props.url} alt="" />
    </div>
  );
};

export default Image;
