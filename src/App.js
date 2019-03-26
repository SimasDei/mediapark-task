import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Search from './Components/Search';
import Images from './Components/Images';
import Queries from './Components/Queries';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <main className="container">
            <Search />
            <Images />
            <Queries />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
