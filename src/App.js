import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          Hello World! How are you ?
          <StarRating totalStars={7} 
          starsSelected={3} 
          onChange={newRating => alert(`new rating ${newRating}`)}
          />

        </header>
      </div>
    );
  }
}

export default App;