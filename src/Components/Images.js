import React, { Component } from 'react';
import unsplashAPI from '../config';
import axios from 'axios';
import Image from './Image';

export class Images extends Component {
  state = {
    images: []
  };
  componentWillMount() {
    const { SECRET_KEY, ACCESS_KEY, API_ROOT } = unsplashAPI;
    axios
      .get(`${API_ROOT}/photos/?client_id=${ACCESS_KEY}`)
      .then(res => {
        // const imgLink = res.data.urls.regular;
        const imgLink = res.data.map(img => img.urls.regular);
        this.setState({ images: imgLink });
      })
      .catch(err => console.log(err));
  }

  renderImages = () =>
    this.state.images.map(image => <Image url={image} key={image} />);
  render() {
    return <div className="images__container item">{this.renderImages()}</div>;
  }
}

export default Images;
