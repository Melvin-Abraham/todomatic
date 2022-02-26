import React from 'react';
import TodoListItem from 'components/TodoListItem/TodoListItem';
import { FilterOption } from 'components/TabGroup/TabGroup';
import { TodoItem } from 'utils/types';
import './TodoList.css';

interface TodoListProps {
  todoList: TodoItem[];
  filterBy: FilterOption;
}

function TodoList({ todoList, filterBy }: TodoListProps) {
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

  return (
    <ul className="todo-list-root">
      {filteredTodoList.map((todoItem) => (
        <TodoListItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  )
}

export default TodoList;
