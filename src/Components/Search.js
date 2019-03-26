import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div className="search__container item">
        <form className="search__form">
          <div className="search__field">
            <label htmlFor="search">
              <input
                className="search__input"
                type="text"
                id="search"
                name="search"
                placeholder="Search for an Image"
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

export default Search;
