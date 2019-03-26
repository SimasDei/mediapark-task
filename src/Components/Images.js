import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getImages } from '../actions/imageActions';
import Image from './Image';
// import image from '../assets/dog.jpg';

export class Images extends Component {
  componentWillMount() {
    this.props.getImages();
  }

  renderImages = () => {
    const { images } = this.props.images;
    return images.map(image => <Image key={image} url={image} />);
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
