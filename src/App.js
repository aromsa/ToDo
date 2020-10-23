import React from 'react';
import './app.scss'
import Form from './components/todoForm'
import TodoList from './components/todoList'

function App() {
  return (
    <div className="App">
      <header>
        <h1>What good shall I do this day?</h1>
      </header>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
