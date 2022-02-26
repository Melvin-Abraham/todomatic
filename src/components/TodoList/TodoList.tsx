import React from 'react';
import TodoListItem from 'components/TodoListItem/TodoListItem';
import { TodoItem } from 'utils/types';
import './TodoList.css';

interface TodoListProps {
  todoList: TodoItem[];
}

function TodoList({ todoList }: TodoListProps) {
  return (
    <ul className="todo-list-root">
      {todoList.map((todoItem) => (
        <TodoListItem
          todoItem={todoItem}
          onEdit={() => {}}
          onDelete={() => {}}
          onToggleCompletion={() => {}}
        />
      ))}
    </ul>
  )
}

export default TodoList;
