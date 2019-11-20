import React from 'react';

const Todo = props => {
  const { id, toggleComplete, item, completed } = props;
  return (
    <li
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      onClick={() => toggleComplete(id)}
    >
      {item}
    </li>
  );
};

export default Todo;
