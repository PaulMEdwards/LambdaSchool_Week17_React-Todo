import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  render() {
    console.log('TodoForm render()');
    
    return (
      <div>(TodoForm goes here)</div>
    );
  }
}

export default TodoForm;