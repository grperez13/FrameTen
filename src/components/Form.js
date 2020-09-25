import React, { Component } from "react";

class Form extends Component {
  state = {
    studentAnswer: ""
  };

  handleChange = event => {
    this.setState({ studentAnswer: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            studentAnswer="studentAnswer"
            value={this.state.studentAnswer}
            onChange={this.handleChange}
          />
          {/* <p>
            {" "}
            <button> Submit </button>{" "}
          </p> */}

          <div className="displayStudentAnswer">
            <h3> Your answer is: {this.state.studentAnswer} </h3>
          </div>
        </div>
      </form>
    );
  }
}
export default Form;
