import React, { Component } from "react";
import Menu from "../menu/menu.component"
import listOfPark from "../../data/parks.json";
import "./directory.style.css"

class Directory extends Component {
  constructor() {
    super();
    this.state = { sections: listOfPark }
  }

  render() {
    return (
      <div className="directory">
        {
          this.state.sections.map(section => (
            <Menu key={section.id} name={section.name} image={section.images[0].url} />
          ))}
      </div>
    )
  }
}
export default Directory