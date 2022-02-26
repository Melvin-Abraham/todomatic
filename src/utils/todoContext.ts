import { createContext, Dispatch } from 'react';
import { TodoItem, ReducerAction } from './types';

interface TodoContextShape {
  todoItems: TodoItem[];
  dispatch: Dispatch<ReducerAction>;
}

const TodoContext = createContext<TodoContextShape>({
  todoItems: [],
  dispatch: () => {}
});

export default TodoContext;
