import React, { Component } from "react";
import Auth from "../Auth";

export default class Callback extends Component {
  componentDidMount() {
    const { auth } = this.props;
    console.log("callback auth:", auth);
    auth.handleAuthentication();
  }
  render() {
    return <div>Loading...</div>;
  }
}
