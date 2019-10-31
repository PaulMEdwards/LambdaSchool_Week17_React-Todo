import React from "react";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  render() {
    console.log('Todo render()');
    
    return (
      <div>(Todo goes here)</div>
    );
  }
}

export default Todo;