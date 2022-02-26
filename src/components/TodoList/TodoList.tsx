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
        <TodoListItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  )
}

export default TodoList;
