import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./../logo.svg";
import SpamScannerLogo from "./../images/logo.png";
import "./../App.css";
import { Button } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.onTargetScroll);
  }

  onTargetScroll = e => {
    const { target } = e;
    const documentElement = document.documentElement || document.body;
    const navElem = document.getElementById("main-nav");

    if (
      documentElement.scrollTop > 50 &&
      !navElem.className.includes("scrolled")
    ) {
      const curClassNames = navElem.className;
      navElem.className = curClassNames + " scrolled";
    } else if (documentElement.scrollTop === 0) {
      const curClassNames = navElem.className;
      const newClassName = curClassNames.replace(/scrolled/, "");
      navElem.className = newClassName;
    }
  };

  render() {
    const { auth, name: userName } = this.props;

    return (
      <nav
        className="navbar transparent navbar-expand-lg fixed-top App-header"
        id="main-nav"
      >
        <div className="container">
          <Link className="navbar-brand" to="home">
            <img
              src={SpamScannerLogo}
              height={30}
              className="d-inline-block align-top"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/home">
                  <span className="nav-link">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/filter">
                  <span className="nav-link">Filter</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home#HowTo">
                  How To
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home#Download">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="home#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                {auth.isAuthenticated() ? (
                  <NavLink to="/secret">
                    <Button bg="transparent" color="#fe7676">
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        style={{ marginRight: 8 }}
                      />
                      Logout {userName}
                    </Button>
                  </NavLink>
                ) : (
                  <Button
                    bg="transparent"
                    color="#00deff"
                    onClick={this.props.auth.login}
                  >
                    <FontAwesomeIcon
                      icon={faSignInAlt}
                      style={{ marginRight: 8 }}
                    />
                    Login
                  </Button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
