import React from 'react';
// import Header from './components/header'
// import Headline from './components/headline'
// import Login from './components/login'
import './app.scss'
import Form from './components/todoForm'
import TodoList from './components/todoList'

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <header>
        <h1>What good shall I do this day?</h1>
      </header>
      <Form/>
      <TodoList/>
    </div>
  );
}

export default App;
