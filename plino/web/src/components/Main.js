import React, {Component} from "react";

export default class Main extends Component {
    render() {
        return (
            <div>
            <p className="App-Intro">
           Hey, {this.props.name}<br/> Wanna know a secret? <a href="/secret">Click here</a>
           </p>
            {!this.props.auth.isAuthenticated() &&
            <div>
                <hr/>
                {/* {Please login first} */}
                <hr/>
                <button onClick={this.props.auth.login}>login </button>
            </div>  
            }
            
        </div>
            )
    }
}