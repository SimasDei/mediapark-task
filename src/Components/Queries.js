import React, { Component } from 'react';
import Query from './Query';

export class Queries extends Component {
  render() {
    return (
      <div className="queries__container item">
        <Query />
        <Query />
        <Query />
      </div>
    );
  }
}

export default Queries;
