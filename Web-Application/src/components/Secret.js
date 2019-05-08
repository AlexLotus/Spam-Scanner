import React, { Component } from "react";
import { Box, Button } from "rebass";

export default class Secret extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 10
    };
  }

  componentDidMount() {
    const { history } = this.props;

    setInterval(() => {
      const { timer } = this.state;
      if (timer === 0) {
        history.push("/home");
        return;
      }
      this.setState({ timer: timer - 1 });
    }, 1000);
  }

  render() {
    const { timer } = this.state;
    return (
      <Box py={5} color="white">
        It's a secret. Now you can go <a href="/home">Home</a>.
        <p>Redirecting home in {timer} seconds...</p>
        <br />
        <Button onClick={this.props.auth.logout} bg="#fe7676" mt={4}>
          Logout
        </Button>
      </Box>
    );
  }
}
