import React, { Component } from 'react';
import Features from './Features';
import 'font-awesome/css/font-awesome.min.css';

import './styles/style.scss';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">HipCamp</h1>
        </header>
        <hr />
         <Features />
      </div>
    );
  }
}

export default App;
