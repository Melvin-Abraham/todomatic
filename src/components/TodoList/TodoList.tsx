import React, { useState } from 'react';
import TodoListItem from 'components/TodoListItem/TodoListItem';
import RenameModal from 'components/RenameModal/RenameModal';
import TodoListEmptyState from 'components/TodoList/TodoListEmptyState';
import { FilterOption } from 'components/TabGroup/TabGroup';
import { TodoItem } from 'utils/types';
import './TodoList.css';
import useTodo from 'hooks/useTodo';

interface TodoListProps {
  todoList: TodoItem[];
  filterBy: FilterOption;
}

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
    return <TodoListEmptyState />
  }

  return (
    <>
      <ul className="todo-list-root">
        {filteredTodoList.map((todoItem) => (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            onEdit={() => setEditTodoItem(todoItem)}
            onDelete={() => dispatch({
              type: 'remove',
              payload: todoItem.id,
            })}
            onToggleCompletion={() => dispatch({
              type: 'toggleCompletion',
              payload: todoItem.id,
            })}
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
