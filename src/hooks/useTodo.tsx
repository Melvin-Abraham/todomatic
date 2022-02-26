import React, { useContext } from 'react';
import TodoContext from 'utils/todoContext';

function useTodo() {
  return useContext(TodoContext);
}

export default useTodo;
