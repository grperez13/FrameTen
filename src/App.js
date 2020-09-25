import React, { Component } from "react";
import "./App.css";
// import Input from "./components/Input";
import Dots from "./components/Dots";
import Form from "./components/Form";

class App extends Component {
  //constructor -still figuring out what this does
  constructor(props) {
    super(props);
    //var firstBoxCounter;
    //var secondBoxCounter;
    //this is what im using for the final answer
    this.stateAnswer = {
      answer: 0
    };
  }

  //this is for the first board
  state = {
    board: Array(10).fill(null),
    counterOne: 0
  };

  //this is for the second board
  stateTwo = {
    boardTwo: Array(10).fill(null),
    counterTwo: 0
  };

  // handleClick(index) {
  //   let newBoard = this.state.board;
  //   newBoard[index] = <Dots />;
  //   this.setState({
  //     board: newBoard
  //   });
  //   console.log(this.state.board);
  // }

  //handles onClick of first board
  handleClick(index) {
    let newBoard = this.state.board;
    newBoard[index] = <Dots />;
    this.setState({
      board: newBoard,
      counterOne: this.state.counterOne + 1
      //this.firstBoxCounter =  firstBoxCounter + 1
      //answer: this.stateAnswer.answer + 1
    });

    // alert("I counted + 1 in box one");
  }

  //handles onClick of second board
  handleClickTwo(index) {
    let newBoardTwo = this.stateTwo.boardTwo;
    newBoardTwo[index] = <Dots />;
    this.setState({
      boardTwo: newBoardTwo,
      counterTwo: this.state.counterTwo + 1

      // answer: this.stateAnswer.answer + 1
    });
    // this.stateAnswer.answer;
    alert("counter Two values is " + 1);
  }

  render() {
    // const answer = this.stateAnswer.answer;
    const BoxTwo = this.stateTwo.boardTwo.map((box, index) => (
      <div
        className="box"
        key={index}
        onClick={() => this.handleClickTwo(index)}
      >
        {box}
      </div>
    ));

    const Box = this.state.board.map((box, index) => (
      <div className="box" key={index} onClick={() => this.handleClick(index)}>
        {box}
      </div>
    ));

    // const Box = this.state.board.map(box => <div className="box">{box}</div>);
    return (
      <div className="container">
        <h1> Frame Ten </h1>
        <div className="board-one">{Box}</div>
        <div className="board-two"> {BoxTwo} </div>
        <div className="studentInput">
          <h3> Enter your answer: </h3>
        </div>
        <div className="studentForm">
          <Form />
        </div>

        <div className="correctAnswer">
          <h3> The correct answer is: {this.stateAnswer.answer} </h3>
        </div>
      </div>
    );
  }
}

export default App;
