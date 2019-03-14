import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Filter from "./components/Filter";
import UpdatedFilter from "./components/UpdatedFilter";
import "./App.css";

class App extends Component {
 

  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <div className="router">
              <Header />
            </div>

            <Route exact path="/" component={Home} />
            <Route path="/filter" component={Filter} />
            <Route path="/new" component={UpdatedFilter} />
          </div>
        </Router>
        
        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Spammy 2019
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
