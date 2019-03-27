import React from 'react';

const Query = props => {
  return (
    <div className="query__container">
      <p>{props.query}</p>
      <button className="query__button">Search</button>
    </div>
  );
};

export default Query;
