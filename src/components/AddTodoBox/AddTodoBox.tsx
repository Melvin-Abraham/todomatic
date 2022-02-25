import React, { useState } from 'react';
import { PlusIcon } from '@iconicicons/react';
import './AddTodoBox.css';

/**
 * Renders an input group to add todo items
 */
function AddTodoBox() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [todoText, setTodoText] = useState('');

  return (
    <div className="add-todo-box-root" data-active={isInputFocused}>
      <span className="add-todo-box-leading">
        &gt;
      </span>

      <input
        type="text"
        placeholder="What's on your mind..."
        className="add-todo-box-input"
        value={todoText}
        onChange={(e) => setTodoText(e.currentTarget.value)}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />

      <div className="add-todo-button-root">
        <button
          type="submit"
          className="add-todo-button"
          title="Add todo"
          disabled={(todoText.trim()).length === 0}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  )
}

export default AddTodoBox;
