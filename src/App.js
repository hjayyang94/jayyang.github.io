import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBarBlizzard/NavBarBlizzard';
import Footer from './components/Footer/Footer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
      </div>

    );
  }
}

export default App;
