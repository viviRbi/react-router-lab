import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage.component"
import { Router, Link } from "react-router-dom"
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: this.name
    }
  }

  render() {
    return (
      <div>

        <nav>
          <h1>National Park List</h1>
        </nav>
        <HomePage />
      </div>
    );
  }
}

export default App;
