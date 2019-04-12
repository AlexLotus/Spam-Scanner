import React, {Component} from "react";

export default class Secret extends Component {
    render() {
        return (
            <div>
                It's a secret. Now you can goto <a href="/home">Home</a>
                <br/>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
            )
    }
}