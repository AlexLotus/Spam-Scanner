import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      emailtext: "none",
      message: "my uncle ben!"
    };
  }

  componentDidMount() {
    this.checkMessage();
  }

  onMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault();

    this.checkMessage();
  };

  checkMessage = () => {
    const { message } = this.state;
    fetch(
      "https://cors-anywhere.herokuapp.com/https://plino.herokuapp.com/api/v1/classify/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_text: message
        })
      }
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.email_class
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  };

  render() {
    const { error, isLoaded, items } = this.state;
    return (
      <div className="App">
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
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Filtering
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="bg-primary text-white">
          <div className="container text-center">
            <h1>Spammy Spam Filtering</h1>
            <p className="lead">A spam filtering application for your inbox!</p>
          </div>
        </header>

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Test out our spam service!</h2>
                <p className="lead">Insert some text for testing</p>
                <p>{this.emailtext}</p>
                {!isLoaded ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div>Error: {error.message}</div>
                ) : (
                  <div className="card">
                    <div className="card-body">
                      <form onSubmit={this.handleSubmit} className="text-left">
                        <div className="form-group">
                          <label>Message:</label>
                          <input
                            type="text"
                            placeholder="Insert message here"
                            className="form-control"
                            onChange={this.onMessageChange}
                          />
                        </div>
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-primary"
                        />
                      </form>
                    </div>
                    <div className="card-footer">
                      <strong>Result: {items}</strong>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Services we offer</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  optio velit inventore, expedita quo laboriosam possimus ea
                  consequatur vitae, doloribus consequuntur ex. Nemo assumenda
                  laborum vel, labore ut velit dignissimos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Contact us</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  odio fugiat voluptatem dolor, provident officiis, id iusto!
                  Obcaecati incidunt, qui nihil beatae magnam et repudiandae
                  ipsa exercitationem, in, quo totam.
                </p>
              </div>
            </div>
          </div>
        </section>

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
