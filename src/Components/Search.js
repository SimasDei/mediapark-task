import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchTerm, getImages } from '../actions/imageActions';

export class Search extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const searchTerm = this.refs.search.value;
    this.props.images.searchTerm = searchTerm;
    this.props.getImages(this.props.images);
    console.log(this.props.images.searchTerm);
  };
  render() {
    return (
      <div className="search__container item">
        <form className="search__form" onSubmit={this.handleSubmit}>
          <div className="search__field">
            <label htmlFor="search">
              <input
                className="search__input"
                type="text"
                id="search"
                name="search"
                placeholder="Search for an Image"
                ref="search"
              />
            </label>
          </div>
          <div className="search__buttons">
            <button className="search__button" type="submit">
              Search
            </button>
            <button className="search__button" type="button">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images
});

export default connect(
  mapStateToProps,
  { searchTerm, getImages }
)(Search);
