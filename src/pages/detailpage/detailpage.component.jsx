import React, { Component } from "react"


class DetailPage extends Component {


  display() {
    for (let i = 0; i < this.props.sections.length; i++) {
      if (this.props.match.params.parkCode === this.props.sections[i].parkCode) {
        return (
          <div>
            <h1>{this.props.sections[i].name}</h1>
            <div>
              <h5>{this.props.sections[i].description}</h5>
            </div>
          </div>);
      }
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.display()}

      </div>

    )
  }
}
export default DetailPage