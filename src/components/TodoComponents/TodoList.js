import React from 'react';

import ToDo from './ToDo';

const ToDoList = (props) => {
  return (
    <div className="ToDoList">
      {props.todos.map(todo => (
        <ToDo
          key={todo.id}
          todo={todo}
          toggleDone={props.toggleDone}
        />
      ))}
    </div>
  );
}

export default ToDoList;