import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    fetch("https://cors-anywhere.herokuapp.com/https://plino.herokuapp.com/api/v1/classify/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_text: 'my uncle ben!'
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.email_class
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {this.emailtext}
            </p>

            <form onSubmit={this.handleSubmit}>
              <label>Message:
                <input type="submit" value="Submit" />
              </label>
              
            </form>
            {items}
          </header>
        </div>
      );
    }
  }

}

export default App;
