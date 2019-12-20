import React from "react"
import { withRouter } from "react-router-dom";
import "./menu.style.css"

const Menu = ({ name, images, history, match }) => (
  <section className="eachImage" style={{ backgroundImage: `url(${images[0].url})` }} onClick={() => history.push(`${match.url}${name}`)}>
    <h3 className="image-name">{name}</h3>
  </section>
)

export default withRouter(Menu)