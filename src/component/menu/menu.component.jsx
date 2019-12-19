import React from "react"
import "./menu.style.css"

const Menu = ({ name, image }) => (
  <section className="eachImage" style={{ backgroundImage: `url(${image})` }}>
    <h3 className="image-name">{name}</h3>
  </section>
)

export default Menu