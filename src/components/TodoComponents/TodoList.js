import React from "react";

import { Todo } from './Todo';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  render() {
    console.log('TodoList render()');
    
    return (
      <div>
        (TodoList goes here)
        [Todo goes here]
      </div>
    );
  }
}

export default TodoList;