import React, { Component } from "react"
import "./detailpage.style.css"


class DetailPage extends Component {
  display() {
    for (let i = 0; i < this.props.sections.length; i++) {
      if (this.props.match.params.parkCode === this.props.sections[i].parkCode) {
        return (
          <div className="all">

            <section className="cover-pic" style={{ backgroundImage: `url(${this.props.sections[i].images[0].url})` }}>
              <h1>{this.props.sections[i].name}</h1>
              <article><h5>{this.props.sections[i].description}</h5></article>
            </section>

            <section>
              <article>
                <h4>Address</h4>
                <h6>{this.props.sections[i].addresses[0].line1}</h6>
                <h6>{this.props.sections[i].addresses[0].city}, {this.props.sections[i].addresses[0].stateCode}, {this.props.sections[i].addresses[0].postalCode}</h6>
              </article>
              <article>
                <h4>Direction</h4>
                <h6>{this.props.sections[i].directionsInfo}</h6>
              </article>
            </section>
          </div>


        );
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