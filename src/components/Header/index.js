// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <nav className="nav-container">
      <div className="div-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-logo"
        />
      </div>
      <h1>Wave</h1>
      <ul className="unorder-container">
        <li className="list-style">
          <Link to="/">Home</Link>
        </li>
        <li className="list-style">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list-style">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Header
