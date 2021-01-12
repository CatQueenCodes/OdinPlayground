import React from 'react';
import ReactDOM from 'react-dom';
import { unstable_concurrentAct } from 'react-dom/test-utils';
import './index.css';

//passing props/takes props
//creates square button, with a class and event listener (takes value and onclick props from Board, which used assigned prop values in Board creation in Game)
function Square(props) {
  return (
    <button 
      className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

//functionality to render a board that renders the 9 squares inside of it
class Board extends React.Component {
  renderSquare(i) { //i assigns that array index to that square when it is created with i = 0-8 to correspond with the boards array index,    
    return ( <Square 
      value={this.props.squares[i]} //prop in Square button to show inner display value of the square (blank, X, O), will be re-rendered with every click  --specific props.square[i] value is set in Game
      onClick={() => this.props.onClick(i)} //prop for onClick in square, handleClick(i) is created with each square with its assigned number in-place of 'i' when render() below  --specific props.onClick value is set in Game
      />);
  }

  render() {   //creates the board with each square given a value linked to array index/used in handleClick(i)
    return (
      <div>
        <div className="board-row">  
          {this.renderSquare(0)}  
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div> 
    );
  }
}
  
class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {  //history is an array of object game boards 'squares : [null null null ....]
      history: [{  //store old arrays and who's turn it is, uses most recent one in render()
        squares: Array(9).fill(null), //contains default empty board 
      }],
      stepNumber: 0, //used to show the version of the board linked to the history button clicked (default board to start)
      xIsNext: true,  //starts out with it being X turn
    };
  }

  handleClick(i) { 
    const history = this.state.history.slice(0, this.state.stepNumber +1);  //returns copy of history that contains all boards from start to current stepNumber + 1 so that it always includes default start board (prevents future moves from being displayed on next click when it is reverted back to older versions)
    const current = history[history.length-1]; //last index in history which will hold the most recently stored array
    const squares = current.squares.slice(); //copies most recent board to preserve the old one
    if (calculateWinner(squares) || squares[i]) { //i is the number it is created with in renderSquares 
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'; //updates array index in copied board with X or O
    this.setState({
      history: history.concat([{squares: squares,}]), //adds a new obj with key "squares" that holds the copied array with updated values to the history in state
      stepNumber: history.length, //updated to keep track of board we are currently on
      xIsNext: !this.state.xIsNext, //toggles true/false which is stored in state to figure out if X or O will be placed next click
    }); 
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0, //if even sets it to true, X moves on even turns
    });
  }

  render() { //every time a click is done
    const history = this.state.history;
    const current = history[this.state.stepNumber]; //uses stepNumber as current board to render
    const winner = calculateWinner(current.squares);  // gets array from current board and checks if theres is a winner
    
    //map creates a button from each object(board array) in history
    const moves = history.map((step, move) => { //move = current index value
      const desc = move ? 'Go to move #' + move : 'Go to game start'; 
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}> {desc}
          </button>
        </li>
      )
    })

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares={current.squares} //assigning prop value of 'value' to be passed down and used in Squares when the square are created
            onClick={(i) => this.handleClick(i)} // assigning prop value of 'onClick' to be passed down and used Squares when the squares are created
          />
        </div>
        <div className="game-info">
          <div>{status}</div> 
          <ol>{moves}</ol> //puts all buttons created with map() in this list
        </div>
      </div>
    );
  }
}  
  
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

//helper
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]; //destructuring
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}