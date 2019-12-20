import React, { Component } from 'react';
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";
import Header from "./component/header/header.component"
import listOfPark from "./data/parks.json";
import DetailPage from "./pages/detailpage/detailpage.component"
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: listOfPark,
    };
    this.setSections = this.setSections.bind(this);
  }
  setSections(sections) {
    this.setState({ sections: sections })
  }
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/detail/:parkCode" render={(props) => <DetailPage setSection={this.setSections} {...props} sections={this.state.sections} />} />
      </div>
    );
  }
}



export default App;
