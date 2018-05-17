import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import TopNav from "./components/TopNav/TopNav"
import Tagline from './components/Tagline/Tagline'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TopNav />
        <Tagline />
      </div>
    );
  }
}

export default App;
