import React from "react";

class ClearCompletedTodos extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  render() {
    console.log('ClearCompletedTodos render()');
    
    return (
      <div>(ClearCompletedTodos goes here)</div>
    );
  }
}

export default ClearCompletedTodos;