import React, { Component } from "react";

export default class UpdatedFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          message: "",
          messages: [],
          message2: "",
          loading: ""
        };
      }
    

      onMessageChange = e => {
    
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

      checkMessage = async () => {
          this.setState({loading: "Loading..."});
          
          this.setState({ items: [] });

          for (var i = 0; i < this.state.messages.length; i++) {
              const message = this.state.messages[i];
              console.log("test");
              const response = await this.getResponse(message);
              console.log("test");
              this.state.items.push({
                  id: i,
                  result: response,
                  message: message
              });
              const items = this.state.items.map(item => (
                <tr key={item.id}>
                    <td>"{ item.message }"</td>
                    <td>{ item.result }</td>
                </tr>
              ));
              console.log("test");
              this.setState({ 
                  message2: items,
                  isLoaded: true
                });
                console.log(this.state.message2);
          }
          this.setState({loading: "Complete!"});
            
   
      };

      getResponse = async (message) => {
          console.log(message);
          const response = await fetch(
              "https://cors-anywhere.herokuapp.com/https://plino.herokuapp.com/api/v1/classify/",
              {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Origin": "localhost:3000"
                  },
                  body: JSON.stringify({
                    email_text: message
                  })
              }
          ).then(res => res.json()).then(
              result => {
                  return result.email_class;
              }
              
          )
          console.log("test");
          return response;
      }


    render() {
        const { isLoaded, message } = this.state;

        return (
            <div>
            <header className="bg-primary text-white">
            <div className="container text-center">
              <p className="lead">A spam filtering application for your inbox!</p>
            </div>
          </header>


<section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <p className="lead">Insert multiple messages to classify, seperated by comma</p>
            
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
                      <strong className="m-2">{this.state.loading}</strong>
                      {!isLoaded ? (
                          <br/>
                      )
                      :
                      (
                      <table className="table mt-2 table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Message</th>
                                <th scope="col">Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.message2}
                        </tbody>
                      </table>
                      )}
                    </div>
                  </div>
                
              </div>
            </div>
          </div>
        </section>
        </div>
  
        );
    };
}