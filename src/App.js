// followed tutorial https://www.youtube.com/watch?v=c6t3bW7kx6E

import React, { Component } from 'react';
//import logo from './logo.svg';
import Youtube from './Components/Youtube';
import './App.css';

class App extends Component {
  render() {
    return (
      // only allowed to have one main div
      <div className="App">

          <h3>Web App that fetches for youtube videos on React in a programming education channel </h3>

            <Youtube />

      </div>
    );
  }
}

export default App;
