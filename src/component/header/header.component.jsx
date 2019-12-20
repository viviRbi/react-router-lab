import React from "react"
import "./header.style.css"
import { ReactComponent as Logo } from "../../data/logo.svg";
import { Link } from 'react-router-dom'

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="name">
      <h1>National Park Service</h1>
    </div>
    <div className="name">
      <h2>Hi</h2>
    </div>
  </div>
)
export default Header;