import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";
import "./../App.css";

export default class Header extends Component {
    render() {
        return (
            <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top App-header"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              <img src={logo} className="App-logo" alt="logo" />
              Spam Filter
            </a>
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
                  <Link to="/">
                    <a className="nav-link">
                        Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/filter">
                    <a className="nav-link">
                    Filtering
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        );
    };
}