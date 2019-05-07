import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Filter from "./components/Filter";
import UpdatedFilter from "./components/UpdatedFilter";
import AuthedFilter from "./components/AuthedFilter";
import "./App.css";
import NotFound from "./components/NotFound";
import Secret from "./components/Secret";
import Callback from "./components/Callback";
import Main from "./components/Main";
import logo from "./logo.svg";

class App extends Component {
  render() {
    const { auth } = this.props;
    const isAuthed = auth.isAuthenticated();

    return (
      <Router>
        <div
          className="App"
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
          }}
        >
         
            <Header className="App-Header" {...this.props} />
            
          <div className="container-fluid" style={{ flex: "1 1 auto" }}>
            <div
              className="row flex-xl-nowrap flex-column justify-content-start"
              style={{ minHeight: "100%" }}
            >
              <Switch>
                <Route path="/" exact render={() => <Main {...this.props} />} />
                <Route
                  path="/secret"
                  render={routerProps =>
                    isAuthed ? (
                      <Secret {...this.props} {...routerProps} />
                    ) : (
                      <NotFound />
                    )
                  }
                />
                <Route path="/home" render={() => <Home {...this.props} />} />
                <Route
                  path="/callback"
                  render = {routerProps => 
                    isAuthed ? (
                      <Callback {...this.props} {...routerProps}/>
                    ) : (
                      <NotFound />
                    )
                }
                  
                />
                <Route
                  path="/new"
                  render={() =>
                    isAuthed ? (
                      <AuthedFilter {...this.props} />
                    ) : (
                      <UpdatedFilter {...this.props} />
                    )
                  }
                />
                <Route
                  path="/filter"
                  render={() =>
                    isAuthed ? (
                      <AuthedFilter {...this.props} />
                    ) : (
                      <Filter {...this.props} />
                    )
                  }
                />
                <Route component={NotFound} />
              </Switch>
              {/* {mainComponent} */}
            </div>
          </div>
          <footer className="py-3 bg-dark">
            <div className="container col">
              <p className="m-0 text-center text-white">
                Copyright &copy; Spammy-Scanner 2019
              </p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
