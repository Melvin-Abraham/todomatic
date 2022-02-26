import React, { useState, useReducer } from 'react';
import Appbar from 'components/Appbar/Appbar';
import Container from 'components/Container/Container';
import AddTodoBox from 'components/AddTodoBox/AddTodoBox';
import TabGroup, { FilterOption } from 'components/TabGroup/TabGroup';
import TodoList from 'components/TodoList/TodoList';
import TodoContext from 'utils/todoContext';
import reducer from 'utils/reducer';
import dummyData from 'utils/dummyData';
import './App.css';

function App() {
  const [todoItems, dispatch] = useReducer(reducer, dummyData);
  const [filterBy, setFilterBy] = useState<FilterOption>('all');

  return (
    <TodoContext.Provider value={{ todoItems, dispatch }}>
      <div className="app">
        <Appbar />

        <main>
          <Container>
            <AddTodoBox />

            <TabGroup
              activeFilter={filterBy}
              onFilterChange={(filterOption) => setFilterBy(filterOption)}
            />

            <TodoList todoList={todoItems} filterBy={filterBy} />
          </Container>
        </main>
      </div>
    </TodoContext.Provider>
  )
}

export default App;
