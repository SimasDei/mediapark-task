import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div className="search__container">
        <form className="search__form">
          <label htmlFor="search">
            <input
              className="search__input"
              type="text"
              id="search"
              name="search"
              placeholder="Search for an Image"
            />
            <button className="search__button" type="submit">
              Search
            </button>
            <button className="search__button" type="button">
              Save
            </button>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
