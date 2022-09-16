import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from './dump.png'

//rendered in the root component i.e. App.js

export class NavBar extends Component {

  //when a link on the navbar is clicked, it will be highlighted after unhighliting the previously highlighted link
  handleNavLink = (event) => {
    const elems = document.querySelectorAll(".active");

    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    event.target.classList.add('active');
  }

  //same function except its for the NewsDump logo and it highlights the home link on the navbar
  handleNavLogo = (event) => {
    const elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function (el) {
      el.classList.remove("active");
    });
    document.getElementsByClassName('nav-home').classList.add('active');
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={this.handleNavLogo}>NewsDump <img src={logo} alt='logo' style={{height: '1.8rem'}}/></Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active nav-home" to="/" onClick={this.handleNavLink}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business" onClick={this.handleNavLink}>Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment" onClick={this.handleNavLink}>Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health" onClick={this.handleNavLink}>Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science" onClick={this.handleNavLink}>Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports" onClick={this.handleNavLink}>Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology" onClick={this.handleNavLink}>Technology</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;