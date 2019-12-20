import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import './App.css';

const FirstPage = () => (
  <h1>Hat Page</h1>
)

function App() {
  return (
    <div>

      <nav>
        <h1>National Park List</h1>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/first" component={FirstPage} />
      </Switch>
    </div>
  );
}

export default App;
