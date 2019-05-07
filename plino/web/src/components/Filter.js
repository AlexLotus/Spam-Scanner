import React, { Component } from "react";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      items: [],
      emailtext: "none",
      message: "",
      messages: [],
      items2: [],
      message2: ""
    };
  }

  componentDidMount() {
    //this.checkMessage();
  }

  onMessageChange = e => {
    this.setState({ message: e.target.value });
  };

  onMessageChange2 = e => {
    this.setState({ message: e.target.value });
    var test = e.target.value;
    var test2 = test.split(",");
    this.setState({ messages: test2 });
  };

  handleSubmit2 = e => {
    e.stopPropagation();
    e.preventDefault();

    this.checkMessage2();
  };

  checkMessage = () => {
    const { message } = this.state;
    this.setState({ items: "Loading..." });
    fetch("http://localhost:8000/api/v1/classify/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email_text: message
      })
    })
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
    this.setState({ message2: "Loading..." });
    this.setState({ items2: [] });
    for (var i = 0; i < this.state.messages.length; i++) {
      fetch("http://localhost:8000/api/v1/classify/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          email_text: this.state.messages[i]
        })
      })
        .then(res => res.json())
        .then(
          result => {
            this.state.items2.push(result.email_class);
            this.setState({ message2: String(this.state.items2) });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
  };
  render() {
    const { error, isLoaded, items, items2, message, message2 } = this.state;

    return (
      <div>
        <header className="bg-primary text-white" style={{ paddingTop: 50 }}>
          <div className="container text-center">
            <p className="lead">A spam filtering application for your inbox!</p>
          </div>
        </header>

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead">
                  Insert multiple messages to classify, seperated by comma
                </p>
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
    );
  }
}
