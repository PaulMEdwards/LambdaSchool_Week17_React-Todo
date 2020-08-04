import React from 'react';

const ToDo = (props) => {
  let classAddendum = props.todo.completed ? " Completed" : "";

  const handleClick = () => {
    props.toggleDone(props.todo.id);
  };

  return (
    <div className={"ToDo"+classAddendum} onClick={handleClick}>
      <p>
        {/* <span>ID: {props.todo.id}</span> - <span>ToDo:  */}
        {props.todo.todo}
        {/* </span> */}
      </p>
    </div>
  );
}

export default ToDo;