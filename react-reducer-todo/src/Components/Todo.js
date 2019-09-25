import React, { useState, useReducer } from 'react';

import { todoReducer, initialTodoState } from '../reducers/TodoReducer';

const Todo = () => {
  const [newTodo, setNewTodo] = useState();
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.title}{' '}
          <button
            className="far fa-edit"
            onClick={e => {
              //console.log(e);
              dispatch({ type: 'TOGGLE_EDITING' });
            }}
          >
            Add Todo
          </button>
        </h1>
      ) : (
        <div>
          <input
            type="text"
            name="newTodo"
            value={newTodo}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              dispatch({ type: 'UPDATE_TITLE', payload: newTodo });
            }}
          >
            Update Todo
          </button>
          <button
            onClick={() => {
              dispatch({ type: 'DELETE_TITLE' });
            }}
          >
            Delete Todo
          </button>
        </div>
      )}
    </div>
  );
};

export default Todo;
