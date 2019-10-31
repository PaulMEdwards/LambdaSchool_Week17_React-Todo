import React from 'react';

import { ToDoList, ToDoForm, ClearCompletedToDos } from './components';

import "./ToDo.css";

const data = [
  {
    todo: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    todo: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todos: data
    };
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone(todoId) {
    console.log('todoId: ', todoId);
    
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })
    });
  };

  clearDone = () => {
    console.log('clearDone');

    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  addToDo = todoName => {
    console.log('addToDo: ', todoName);
    const d = Date.now();
    console.log('id: ', d);
    
    this.setState({
      todos: [
        ...this.state.todos,
        {
          todo: todoName,
          id: d,
          completed: false
        }
      ]
    });
  };

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="ToDoApp">
        <header>
          <h1>To Dos</h1>
          <ToDoForm addToDo={this.addToDo} />
        </header>
        <section className="ToDoList">
          <ToDoList
            todos={this.state.todos}
            toggleDone={this.toggleDone}
          />
        </section>
        <footer>
          <ClearCompletedToDos clearDone={this.clearDone} />
        </footer>
      </div>
    );
  }
}

export default App;
