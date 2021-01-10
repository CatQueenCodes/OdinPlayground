import React from 'react';
import ReactDOM from 'react-dom';
import { unstable_concurrentAct } from 'react-dom/test-utils';
import './index.css';

//renders square, needs value and onclick props from Board
function Square(props) {
  return (
    <button 
      className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

//renders 9 square buttons and has access to their state so we don't have to go back to the Square class
class Board extends React.Component {
  handleClick(i) {
    const squares = this.state.squares.slice(); //copies array
    if (calculateWinner(squares) || squares[i]) { //i is the number it is created with in renderSquares 
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'; //array index (i) is swapped to X or O, updates squares value 
    this.setState({
      squares: squares, //sets squares: to the new array
      xIsNext: !this.state.xIsNext,
    }); 
  }


  
  renderSquare(i) { //rendered with i = 0-8 to link to array index, assigns that array index to that square            
    return ( <Square 
      value={this.props.squares[i]} //prop value in Square button, lets board store state of square at the array index that matches the value it is rendered with, which is null until clicked as pre-set in the constructor, updated every time state is changed
      onClick={() => this.props.onClick(i)} //prop value for onClick in square, handleClick(i) is created with each square with its assigned number
      />);
  }

  render() {
    const winner = calculateWinner(this.state.squares);  

    let status;
    if(winner) {
      status = 'Winner ' + winner;
    }else {
      status =  'Next player: ' +  (this.state.xIsNext ? 'X' : 'O');
    }
   

    return (
      <div>
        <div className="status">{status}</div>
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
      history: [{  //store old arrays and who's turn it is
        squares: Array(9).fill(null), //original will be empty 
      }],
      xIsNext: true,
    };
  }

  render() {
    const history = this.state.history;
    const current = history[history.length -1]; //last index in history which will hold the most recently stored array
    const winner = calculateWinner(current.squares);  //gets game array from current board
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
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