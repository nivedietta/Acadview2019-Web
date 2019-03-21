import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {

  state = {
    todos: [
      { id: 1, item: 'Wake up early in the morning' },
      { id: 2, item: 'Go grocery shopping' }
    ]
  }

  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter( todo =>{
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  componentDidMount(){
    console.log('Component Mounted');
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Component Updated');
    console.log(prevProps, prevState, snapshot);
  }

  render() {
    return (
      <div className="todo-app container">
        <h3 className="center purple-text"> My Todo list!</h3>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;