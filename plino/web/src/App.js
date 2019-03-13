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
      message: "",
      messages: [],
      items2: [],
      message2: ""
    };
  }

  componentDidMount() {
    this.checkMessage();
  }

  onMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  onMessageChange2 = e => {
    this.setState({ message: e.target.value });
    var test = e.target.value;
    var test2 = test.split(',');
    this.setState({ messages: test2 });
  };


  handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault();

    this.checkMessage();
  };

  handleSubmit2 = e => {
    e.stopPropagation();
    e.preventDefault();

    this.checkMessage2();
  };



  checkMessage = () => {
    const { message } = this.state;
      this.setState({items: "Loading..."});
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

  checkMessage2 = () => {
      this.setState({items2: "Loading..."});
      console.log(this.state.items2);
      this.state.items2.push("Loading...");
      console.log(this.state.items2);
      this.setState({ items2: [] });
      for (var i = 0; i < this.state.messages.length; i++) {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://plino.herokuapp.com/api/v1/classify/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_text: this.state.messages[i]
        })
      }
    )
      .then(res => res.json())
      .then(
        result => {
          this.state.items2.push(result.email_class);
          this.setState({message2: String(this.state.items2)});
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
      }
        
      //var array = this.state.items2;
      //this.setState({ items2: array });
  };

  render() {
    const { error, isLoaded, items, items2, message, message2 } = this.state;
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

        
        <section id="info-tabs">
        <h2>Test out our spam service!</h2>
                <p className="lead">Insert some text for testing</p>
        
                    <nav className="d-flex justify-content-center">
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Single Message</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Multiple Messages</a>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                          
                          <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead">Insert one message to classify</p>
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
                            value={message}
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
                      <strong>Result: {this.state.items}</strong>
                      

                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
                          
                          </div>
                      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                          
                          <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead">Insert multiple messages to classify, seperated by comma</p>
                <p>{this.emailtext}</p>
                {!isLoaded ? (
                  <div>Loading...</div>
                ) : error ? (
                  <div>Error: {error.message}</div>
                ) : (
                  <div className="card">
                    <div className="card-body">
                      <form onSubmit={this.handleSubmit2} className="text-left">
                        <div className="form-group">
                          <label>Message:</label>
                          <input
                            type="text"
                            placeholder="Insert message here"
                            className="form-control"
                            onChange={this.onMessageChange2}
                            value={message}
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
                      <strong>Result: {this.state.message2}</strong>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
                          
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
