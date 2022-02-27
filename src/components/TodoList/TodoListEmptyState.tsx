import React from 'react';
import './TodoListEmptyState.css';

function TodoListEmptyState() {
  return (
    <div className="todo-list-empty-state-root">
      <div className="todo-list-empty-state-illustration">
        {'(^-^*)'}
      </div>

      <h2 className="todo-list-empty-state-heading">
        It seems empty in here
      </h2>

      <p className="todo-list-empty-state-details">
        There are no tasks to show for now...
      </p>
    </div>
  )
}

export default TodoListEmptyState;
