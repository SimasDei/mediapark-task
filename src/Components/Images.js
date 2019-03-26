import React, { Component } from 'react';
import Image from './Image';

export class Images extends Component {
  render() {
    return (
      <div className="images__container item">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </div>
    );
  }
}

export default Images;
