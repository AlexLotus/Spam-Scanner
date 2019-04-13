import React, { Component } from "react";
import { Box, Button } from "rebass";

export default class Main extends Component {
  render() {
    return (
      <Box py={5}>
        <p className="App-Intro">
          Hey, {this.props.name}
          <br /> Wanna know a secret? <a href="/secret">Click here</a>
        </p>
        {!this.props.auth.isAuthenticated() && (
          <div>
            <hr />
            {/* {Please login first} */}
            <hr />
            <Button
              bg="#00deff"
              px={[3, 5]}
              py={[2, 3]}
              onClick={this.props.auth.login}
            >
              Login
            </Button>
          </div>
        )}
      </Box>
    );
  }
}
