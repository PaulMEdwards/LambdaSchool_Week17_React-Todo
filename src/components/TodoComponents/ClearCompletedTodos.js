import React from 'react';

const ClearCompletedTodos = (props) => {
  return (
    <button className="clear-button" onClick={props.clearDone}>
      Clear Completed
    </button>
  );
}

export default ClearCompletedTodos;