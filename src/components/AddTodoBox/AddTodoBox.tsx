import React, { useState } from 'react';
import { PlusIcon } from '@iconicicons/react';
import useTodo from 'hooks/useTodo';
import quickAddFeedbackAudio from 'public/quick_add.mp3';
import inputErrorFeedbackAudio from 'public/error_feedback.mp3';
import './AddTodoBox.css';

const quickAddFeedbackAudioElement = new Audio(quickAddFeedbackAudio);
const inputErrorFeedbackAudioElement = new Audio(inputErrorFeedbackAudio);

/**
 * Renders an input group to add todo items
 */
function AddTodoBox() {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [todoText, setTodoText] = useState('');
  const [isError, setIsError] = useState(false);
  const { dispatch } = useTodo();

  const onSubmit = () => {
    if (todoText.trim().length === 0) {
      // Play feedback when creating an empty task
      inputErrorFeedbackAudioElement.play();

      // Show error styles to convey visually
      setIsError(true);

      return;
    };

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

    // Play feedback when the task has been added
    quickAddFeedbackAudioElement.play();
  }

  return (
    <div className="add-todo-box-root" data-active={isInputFocused} data-error={isError}>
      <span className="add-todo-box-leading">
        &gt;
      </span>

      <input
        type="text"
        placeholder="What's on your mind..."
        className="add-todo-box-input"
        value={todoText}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => {
          setIsInputFocused(false);
          setIsError(false);
        }}
        onChange={(e) => {
          setTodoText(e.currentTarget.value);
          setIsError(false);
        }}
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
