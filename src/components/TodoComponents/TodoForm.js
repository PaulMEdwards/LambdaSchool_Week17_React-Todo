import React from 'react';

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      todoName: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todoName !== "") {
      this.props.addToDo(this.state.todoName);
      this.setState({
        todoName: ""
      });
    }
  };

  render() {
    console.log('ToDoForm render()');
    
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="New To Do description"
          value={this.state.todoName}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoForm;