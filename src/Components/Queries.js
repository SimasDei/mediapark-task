import React, { Component } from 'react';
import { connect } from 'react-redux';
import Query from './Query';

export class Queries extends Component {
  renderQueries = () => {
    const queries = this.props.images.queries;
    return queries.map(query => <Query key={query} query={query} />);
  };
  render() {
    return (
      <div className="queries__container item">{this.renderQueries()}</div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images
});

export default connect(mapStateToProps)(Queries);
