
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    markComplete = () => {
        console.log('hello');
    }
  render() {
    console.log(this.props.todos)
    return this.props.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}/>
    ));
  }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;



// class App extends Component {
//     render() {
//       return (
//         <div className="App">
//           <Todos />
//         </div>
//       );
//     }
//   }


// function App() {
//   let state = {
//     todos: [
//       {
//         id: 1,
//         title: "take out trash",
//         completed: false
//       },
//       {
//         id: 2,
//         title: "Dinner with cat",
//         completed: false
//       },
//       {
//         id: 3,
//         title: "Some Bullshit",
//         completed: false
//       }
//     ]
//   }
//   return (
//     <div className="App">
//       <Todos />
//     </div>
//   );
// }