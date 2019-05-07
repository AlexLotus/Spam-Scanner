import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "./../images/logo.png";

export default class UpdatedFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      message: "",
      messages: [""],
      message2: "",
      loading: "",
      notify: "",
      hamCount: 0,
      spamCount: 0
    };
  }

  // Reset the state
  resetState = e => {
    this.setState({
      error: null,
      isLoaded: false,
      items: [],
      message: "",
      messages: [""],
      message2: "",
      loading: "",
      notify: "",
      hamCount: 0,
      spamCount: 0
    });
  };

  // On message change function
  onMessageChange = e => {
    this.setState({ message: e.target.value });
    this.setState({ messages: this.formatString(e.target.value) });
  };

  // Submit button handling
  handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault();
    this.checkMessage();
  };

  // Check the message (spam or ham)
  checkMessage = async () => {
    if (this.state.messages[0] != "") {
      this.setState({ loading: "Loading...", notify: "" });

      this.setState({ items: [], spamCount: 0, hamCount: 0 });

      for (var i = 0; i < this.state.messages.length; i++) {
        const message = this.state.messages[i];
        const response = await this.getResponse(message);
        this.state.items.push({
          id: i,
          result: response,
          message: message
        });
        const items = this.state.items.map(item => (
          <tr key={item.id}>
            <td>"{item.message}"</td>
            <td>{item.result}</td>
          </tr>
        ));

        // Count the number of Ham & Spam messages
        let hamCount = 0;
        let spamCount = 0;
        response === "ham" ? (hamCount = 1) : (spamCount = 1);
        this.setState({
          message2: items,
          isLoaded: true,
          hamCount: this.state.hamCount + hamCount,
          spamCount: this.state.spamCount + spamCount
        });
      }
      this.setState({ loading: "Complete!" });
    } else {
      this.resetState();
      this.setState({ notify: "Submitted text is empty!" });
    }
  };

  getResponse = async message => {
    console.log(message);
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://plino.herokuapp.com/api/v1/classify/",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Origin: "localhost:3000"
        },
        body: JSON.stringify({
          email_text: message
        })
      }
    )
      .then(res => res.json())
      .then(result => {
        return result.email_class;
      });
    console.log("test");
    return response;
  };

  // Function to handle the submission of files
  handleChangeFile(e) {
    let files = e.target.files;
    let reader = new FileReader();

    // Check if fileReader is empty
    if (reader != null) {
      reader.readAsText(files[0]);

      // Reader load function
      reader.onload = e => {
        console.log(e.target.result);
        this.setState({ message: e.target.result });
        var test = e.target.result;
        var test2 = this.formatString(test);
        this.setState({ messages: test2 });
        this.checkMessage();
        reader = null;
      };
    } else {
      this.resetState();
      this.setState({
        notify: "Empty text file!"
      });
      reader = null;
    }
  }

  // Function to format & prepare strings
  formatString(string) {
    // Separate at the comma
    var temporary = string.split(",");

    // Trim the whitespace for each string
    temporary = temporary.map(function(v) {
      v = v.trimLeft();
      v = v.trimRight();
      return v;
    });

    return temporary;
  }

  // Render canvas
  render() {
    const { isLoaded, message, notify } = this.state;

    return (
      <div className="container-fluid">
        <div className="row flex-column">
          <header className="bg-primary text-white pt-5 pb-2">
            <div className="container text-center">
              <span className="lead">
                A spam filtering application for your inbox!
              </span>
            </div>
          </header>

          <section id="about" style={{ color: "white" }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  {/* <img className="logo" src={logo} /> */}
                  <p className="lead">
                    Quickly and easily classify your text messages as spam or
                    ham.
                  </p>
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

                          {notify !== "" ? (
                            <h5 className="notify">{notify}</h5>
                          ) : (
                            <br />
                          )}
                        </div>

                        <div>
                          <label
                            for="file-upload"
                            className="custom-file-upload"
                          >
                            <FontAwesomeIcon
                              className="icon"
                              icon={faCloudUploadAlt}
                            />{" "}
                            Upload
                          </label>
                          <input
                            id="file-upload"
                            type="file"
                            name="Filter Text"
                            accept=".txt"
                            onChange={e => this.handleChangeFile(e)}
                          />

                          <input
                            type="submit"
                            value="Submit"
                            className="custom-sub btn btn-primary"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="card-footer">
                      <strong className="m-2 black">
                        {this.state.loading}
                      </strong>
                      {this.state.hamCount > 0 || this.state.spamCount > 0 ? (
                        <div>
                          <h2>
                            <span className="left black">
                              <FontAwesomeIcon
                                className="icon2 green"
                                size="xs"
                                icon={faCheck}
                              />{" "}
                              {this.state.hamCount}
                            </span>
                            <span className="right black">
                              <FontAwesomeIcon
                                className="icon2 red"
                                size="sm"
                                icon={faTimes}
                              />{" "}
                              {this.state.spamCount}
                            </span>
                          </h2>
                        </div>
                      ) : (
                        <br />
                      )}
                      {!isLoaded ? (
                        <br />
                      ) : (
                        <table className="table mt-2 table-striped">
                          <thead className="thead-dark">
                            <tr>
                              <th scope="col">Message</th>
                              <th scope="col">Result</th>
                            </tr>
                          </thead>
                          <tbody>{this.state.message2}</tbody>
                        </table>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
