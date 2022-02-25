import React from 'react';
import Appbar from 'components/Appbar/Appbar';
import Container from 'components/Container/Container';
import AddTodoBox from 'components/AddTodoBox/AddTodoBox';
import './App.css';

function App() {
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
