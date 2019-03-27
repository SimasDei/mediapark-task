import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../actions/imageActions';
import Image from './Image';

export class Images extends Component {
  renderImages = () => {
    const { images } = this.props.images;
    if (images.imgUrl) {
      return images.imgUrl.map(image => <Image key={image} url={image} />);
    }
  };

  render() {
    return <div className="images__container item">{this.renderImages()}</div>;
  }
}

const mapStateToProps = state => ({
  images: state.images
});

export default connect(
  mapStateToProps,
  { getImages }
)(Images);
