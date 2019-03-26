import React, { Component } from 'react';
import Image from './Image';

export class Images extends Component {
  render() {
    return (
      <div className="images__container item">
        <p>Images Component</p>
        <Image />
      </div>
    );
  }
}

export default Images;
