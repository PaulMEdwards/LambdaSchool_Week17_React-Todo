import React from 'react';

const Todo = (props) => {
  let classAddendum = props.todo.completed ? " completed" : "";

  const handleClick = () => {
    props.toggleDone(props.todo.id);
  };

  return (
    <div className={"todo"+classAddendum} onClick={handleClick}>
      <p>
        <span>ID: {props.todo.id}</span> - <span>Todo: {props.todo.todo}</span>
      </p>
    </div>
  );
}

export default Todo;