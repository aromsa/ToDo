import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo, completeTodo } from "./../../redux/action";

const Todo = (props) => {

const deleteHandler = (todoID) => {
  props.deleteTodo(todoID)
}

const completedHandler = (todoID) => {
  props.completeTodo(todoID)
}

const checkForTodos = () => {
  if (!localStorage.token){
    window.history.pushState({pathname: '/'}, "", '/')
    window.location.reload()
  } else {
    let allTodos = props.todos.todos.map(todo => 
      <div key={todo._id} className="todo">
      <li key={todo._id} className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.description}</li>
      <button className="complete-btn" onClick={() => completedHandler(todo._id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteHandler(todo._id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>)
    return allTodos
  }
}
// let allTodos = props.todos.todos.map(todo => 
//   <div key={todo._id} className="todo">
//   <li key={todo._id} className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.description}</li>
//   <button className="complete-btn" onClick={() => completedHandler(todo._id)}>
//     <i className="fas fa-check"></i>
//   </button>
//   <button className="trash-btn" onClick={() => deleteHandler(todo._id)}>
//     <i className="fas fa-trash"></i>
//   </button>
// </div>)

  return (
    <>
      {checkForTodos()}
    </>
  )
}

function msp(state) {
  return { todos: state.todos }
}

const mdp = (dispatch) => {
  return { deleteTodo: (todoID) => dispatch(deleteTodo(todoID)), completeTodo: (todoID) => dispatch(completeTodo(todoID))}
}

export default connect(msp, mdp)(Todo)