import React from 'react';
import { TodoItem } from 'utils/types';
import { EditIcon, TrashIcon } from '@iconicicons/react';
import TodoListItemActionButton, { TodoListItemActionButtonProps } from './TodoListItemActionButton';
import './TodoListItem.css';

interface TodoListItemProps {
  todoItem: TodoItem;
  onEdit: () => void;
  onDelete: () => void;
  onToggleCompletion: () => void;
}

function TodoListItem({ todoItem, onDelete, onEdit, onToggleCompletion }: TodoListItemProps) {
  const todoListItemActions: TodoListItemActionButtonProps[] = [
    {
      title: 'Edit Item',
      ariaLabel: `Edit Item "${todoItem.todo}"`,
      Icon: <EditIcon />,
      onClick: onEdit,
    },
    {
      title: 'Delete Item',
      ariaLabel: `Delete Item "${todoItem.todo}"`,
      Icon: <TrashIcon />,
      onClick: onDelete,
    },
  ];

  return (
    <li className="todo-list-item-root" data-completed={todoItem.complete}>
      <div
        className="todo-list-item-click-target"
        onClick={onToggleCompletion}
      />

      <div className="todo-list-item-primary-content">
        <input
          type="checkbox"
          checked={todoItem.complete}
          id={`checkbox-${todoItem.id}`}
          title={`Mark item "${todoItem.todo}" as ${todoItem.complete ? 'pending' : 'completed'}`}
          onChange={onToggleCompletion}
        />

        <label
          className="todo-list-item-label"
          htmlFor={`checkbox-${todoItem.id}`}
        >
          { todoItem.todo }
        </label>
      </div>

      <div className="todo-list-item-actions-group">
        {todoListItemActions.map((action) => (
          <TodoListItemActionButton
            key={action.title}
            Icon={action.Icon}
            ariaLabel={action.ariaLabel}
            title={action.title}
            onClick={action.onClick}
          />
        ))}
      </div>
    </li>
  )
}

export default TodoListItem;
