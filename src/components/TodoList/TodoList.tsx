import React, { useState } from 'react';
import TodoListItem from 'components/TodoListItem/TodoListItem';
import RenameModal from 'components/RenameModal/RenameModal';
import TodoListEmptyState from 'components/TodoList/TodoListEmptyState';
import { FilterOption } from 'components/TabGroup/TabGroup';
import { TodoItem } from 'utils/types';
import createToast, { dismiss } from 'utils/toast';
import useTodo from 'hooks/useTodo';
import pencilStrokeAudio from '/pencil_line.mp3';
import buttonFeedbackAudio from '/button_press_click_feedback.mp3';
import crumbledPaperAudio from '/trash_crumbled_paper.mp3';
import './TodoList.css';

interface TodoListProps {
  todoList: TodoItem[];
  filterBy: FilterOption;
}

const pencilAudioElement = new Audio(pencilStrokeAudio);
pencilAudioElement.volume = 0.3;

const buttonFeedbackAudioElement = new Audio(buttonFeedbackAudio);
buttonFeedbackAudioElement.volume = 0.3;

const crumbledPaperAudioElement = new Audio(crumbledPaperAudio);
crumbledPaperAudioElement.volume = 0.3;

function TodoList({ todoList, filterBy }: TodoListProps) {
  const [editTodoItem, setEditTodoItem] = useState<TodoItem | undefined>(undefined);
  const { dispatch } = useTodo();

  const filteredTodoList = todoList.filter((todoItem) => {
    switch (filterBy) {
      case 'pending':
        return !todoItem.complete;

      case 'completed':
        return todoItem.complete;

      default:
        return true;
    }
  });

  const onRename = (newName: string) => {
    if (editTodoItem === undefined) return;

    dispatch({
      type: 'edit',
      payload: {
        id: editTodoItem.id,
        todo: newName,
      }
    });

    // Reset todo item for editing. This will hide the
    // rename modal
    setEditTodoItem(undefined);
  }

  if (filteredTodoList.length === 0) {
    return <TodoListEmptyState filterOption={filterBy} />
  }

  return (
    <>
      <ul className="todo-list-root">
        {filteredTodoList.map((todoItem) => (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            onEdit={() => setEditTodoItem(todoItem)}
            onDelete={() => {
              dispatch({
                type: 'remove',
                payload: todoItem.id,
              });

              // Play crumbled paper sound when deleting a task
              crumbledPaperAudioElement.play();

              // Allow user to undo deletion of a task via toast
              createToast(`Deleted "${todoItem.todo}"`, 'info', {
                label: 'Undo',
                onClick: (toastInstance) => {
                  // Add the task back to the list
                  dispatch({
                    type: 'add',
                    payload: {
                      todo: todoItem.todo,
                      complete: todoItem.complete,
                    },
                  });

                  // Dismiss the toast
                  dismiss(toastInstance.id);
                },
              });
            }}
            onToggleCompletion={() => {
              dispatch({
                type: 'toggleCompletion',
                payload: todoItem.id,
              });

              if (!todoItem.complete) {
                // Play pencil stroke sound when marking the task
                // as completed
                pencilAudioElement.play();
              }
              else {
                // Play button feedback sound when marking the task
                // as pending
                buttonFeedbackAudioElement.play();
              }
            }}
          />
        ))}
      </ul>

      <RenameModal
        todoItem={editTodoItem}
        onRename={onRename}
        onCancel={() => setEditTodoItem(undefined)}
      />
    </>
  )
}

export default TodoList;
