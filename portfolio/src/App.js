import React, { Component } from 'react';
import Header from './components/header/header'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>This is a react app</p>
        <Header />
      </div>
    );
  }
}

export default App;
