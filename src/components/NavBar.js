import React from 'react'
import { Link } from 'react-router-dom'
import logo from './dump.png'

//returned in the root component i.e. App.js

const NavBar = (props) => {

  //when a link on the navbar is clicked, it will be highlighted after unhighliting the previously highlighted link
  let handleNavLink = (event) => {
    const elems = document.querySelectorAll(".active");

    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    event.target.classList.add('active');
  }

  //same function except its for the NewsDump logo and it highlights the home link on the navbar
  let handleNavLogo = (event) => {
    const elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    document.getElementsByClassName('nav-home').classList.add('active');
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`} style={{ position: 'sticky', top: 0, zIndex: 2 }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={handleNavLogo}>NewsDump <img src={logo} alt='logo' style={{ height: '1.8rem' }} /></Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active nav-home" to="/" onClick={handleNavLink}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business" onClick={handleNavLink}>Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment" onClick={handleNavLink}>Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health" onClick={handleNavLink}>Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science" onClick={handleNavLink}>Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports" onClick={handleNavLink}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology" onClick={handleNavLink}>Technology</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;