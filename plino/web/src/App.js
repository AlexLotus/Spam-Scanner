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
      emailtext: "none"
    };
  }

  componentDidMount() {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://plino.herokuapp.com/api/v1/classify/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_text: "my uncle ben!"
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
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <nav
            class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top App-header"
            id="mainNav"
          >
            <div class="container">
              <a class="navbar-brand" href="#page-top">
                <img src={logo} className="App-logo" alt="logo" />
                Spam Filter
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#services">
                      Filtering
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <header class="bg-primary text-white">
            <div class="container text-center">
              <h1>Spammy Spam Filtering</h1>
              <p class="lead">A spam filtering application for your inbox!</p>
            </div>
          </header>

          <section id="about">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2>Test out our spam service!</h2>
                  <p class="lead">Insert some text for testing</p>
                  <p>{this.emailtext}</p>
                  <div className="card">
                    <div className="card-body">
                      <form onSubmit={this.handleSubmit} className="text-left">
                        <div className="form-group">
                          <label>Message:</label>
                          <input
                            type="text"
                            placeholder="Insert message here"
                            className="form-control"
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
                </div>
              </div>
            </div>
          </section>

          <section id="services" class="bg-light">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2>Services we offer</h2>
                  <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aut optio velit inventore, expedita quo laboriosam possimus
                    ea consequatur vitae, doloribus consequuntur ex. Nemo
                    assumenda laborum vel, labore ut velit dignissimos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact">
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <h2>Contact us</h2>
                  <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero odio fugiat voluptatem dolor, provident officiis, id
                    iusto! Obcaecati incidunt, qui nihil beatae magnam et
                    repudiandae ipsa exercitationem, in, quo totam.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer class="py-5 bg-dark">
            <div class="container">
              <p class="m-0 text-center text-white">
                Copyright &copy; Spammy 2019
              </p>
            </div>
          </footer>
        </div>
      );
    }
  }
}

export default App;
