import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/logo-designcode.svg'
import './Header.css'

// or you can rquire the logo directly to the link like 
// <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30"/></Link>

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={logo} width="30"/></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/downloads">Downloads</Link>
      <Link to="/worskshops">Workshops</Link>
      <Link to="/buy"><button>Buy</button></Link>
    </div>
  </div>
)

export default Header
