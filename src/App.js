import React, { Component } from 'react';
import Search from './Components/Search';
import Images from './Components/Images';
import Queries from './Components/Queries';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container">
          <Search />
          <Images />
          <Queries />
        </main>
      </div>
    );
  }
}

export default App;
