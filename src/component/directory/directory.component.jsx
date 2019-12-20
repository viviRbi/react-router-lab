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
          this.state.sections.map(({ id, ...otherSectionProps }) => (
            <Menu key={id} {...otherSectionProps} />
          ))}
      </div>
    )
  }
}
export default Directory