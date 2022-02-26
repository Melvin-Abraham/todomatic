import React, { useState } from 'react';
import { PlusIcon } from '@iconicicons/react';
import useTodo from 'hooks/useTodo';
import './AddTodoBox.css';

/**
 * Renders an input group to add todo items
 */
function AddTodoBox() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [todoText, setTodoText] = useState('');
  const { dispatch } = useTodo();

  const onSubmit = () => {
    // Add new todo item to the list
    dispatch({
      type: 'add',
      payload: {
        todo: todoText,
        complete: false,
      }
    });

    // Reset the input text
    setTodoText('');
  }

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
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
      />

      <div className="add-todo-button-root">
        <button
          type="submit"
          className="add-todo-button"
          title="Add todo"
          disabled={(todoText.trim()).length === 0}
          onClick={onSubmit}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  )
}

export default AddTodoBox;
