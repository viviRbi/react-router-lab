import React from "react"
import "./menu.style.css"
import { Link } from "react-router-dom"

const Menu = ({ name, images, parkCode }) => (
  <div>
    <Link to={"/detail/" + parkCode}>
      <section className="eachImage" style={{ backgroundImage: `url(${images[0].url})` }} >
        <h3 className="image-name">{name}</h3>
      </section>
    </Link>:{" "}
  </div >
)

// onClick={() => history.push(`${match.url}${name}`)} export default "withRouter"

export default Menu