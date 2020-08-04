import React from 'react';

const ClearCompletedToDos = (props) => {
  return (
    <button className="ButtonClear" onClick={props.clearDone}>
      Clear Completed
    </button>
  );
}

export default ClearCompletedToDos;