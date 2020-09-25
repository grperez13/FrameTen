import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  stateOne = {
    nameOne: ""
  };

  stateTwo = {
    nameTwo: ""
  };

  handleChange = event => {
    this.setState({ nameOne: event.target.value });
    this.setState({ nameTwo: event.target.value });
  };

  render() {
    return (
      <div className="inputContainer">
        <div className="input-boxOne">
          <div>
            <input value={this.stateOne.name} onChange={this.handleChange} />
          </div>
        </div>

        <div className="input-boxTwo">
          <div>
            <input value={this.stateTwo.name} onChange={this.handleChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
