import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Filter from "./components/Filter";
import UpdatedFilter from "./components/UpdatedFilter";
import "./App.css";
import NotFound from "./components/NotFound";
import Secret from "./components/Secret";
import Callback from "./components/Callback";
import Main from "./components/Main";
import logo from './logo.svg';

class App extends Component {
 

  render() {
    let mainComponent = "";
        switch(this.props.location){
            case "":
                mainComponent = <Main {...this.props} />;
                break;
            case "home":
                mainComponent = <Home />;
            case "callback":
                mainComponent = <Callback />;
                break;
            case "new":
                mainComponent = < UpdatedFilter />;
                break;
            case "secret":
                mainComponent = this.props.auth.isAuthenticated() ? <Secret {...this.props} /> : <NotFound/>;
                break;
            case "filter":
                mainComponent = <Filter />;
            default:
                mainComponent = <NotFound />;
        }
    return (
      <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top App-header"
      id="mainNav"
    >
      <div className="App">
      <header className="App-Header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* So this is where the header gets cut off from the logo (if you uncomment the router)...need to fix 
          Also possible remove the router and replace with a full switch case
      */}
      <h3 className="App-Title">Welcome to our React App, {this.props.name}</h3>
      {/* <Router>
          <div>
            <div className="router">
              <Header />
            </div>
            <Route exact path="/" component={Home} {...this.props} />
            <Route path="/filter" component={Filter} />
            <Route path="/new" component={UpdatedFilter} />
          </div>
        </Router> */}
      </header>
      {mainComponent}
      <p className="App-Intro">
      It's the greatest thing you never knew you needed</p>
<p className="dark"> </p>
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Spammy 2019 
            </p>
          </div>
        </footer>
      </div>
      </nav>
    );
  }
}

export default App;
