import React, { useReducer } from 'react';
import Appbar from 'components/Appbar/Appbar';
import Container from 'components/Container/Container';
import AddTodoBox from 'components/AddTodoBox/AddTodoBox';
import reducer from 'utils/reducer';
import dummyData from 'utils/dummyData';
import './App.css';

function App() {
  const [todoItems, dispatch] = useReducer(reducer, dummyData);

  return (
    <div className="app">
      <Appbar />

      <main>
        <Container>
          <AddTodoBox />
        </Container>
      </main>
    </div>
  )
}

export default App;
