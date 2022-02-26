import React from 'react';
import './TodoListItemActionButton.css';

export interface TodoListItemActionButtonProps {
  Icon: JSX.Element;
  ariaLabel: string;
  title: string;
  onClick: () => void;
}

function TodoListItemActionButton({ Icon, ariaLabel, title, onClick }: TodoListItemActionButtonProps) {
  return (
    <button
      className="todo-list-item-button"
      type="button"
      title={title}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      { Icon }
    </button>
  )
}

export default TodoListItemActionButton;
