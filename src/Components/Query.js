import React from 'react';
import { connect } from 'react-redux';
import { getImages } from '../actions/imageActions';

const Query = props => {
  const handleOnClick = () => {
    const query = {
      searchTerm: props.query
    };
    console.log(query);
    props.getImages(query);
  };
  return (
    <div className="query__container">
      <p>{props.query}</p>
      <button onClick={handleOnClick} className="query__button">
        Search
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.images
});

export default connect(
  mapStateToProps,
  { getImages }
)(Query);
