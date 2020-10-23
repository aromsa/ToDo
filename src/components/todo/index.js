import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo, completeTodo } from "./../../redux/action";

const Todo = (props) => {

  const deleteHandler = (todoID) => {
    console.log(todoID)
    props.deleteTodo(todoID)
  }

  const completedHandler = (todoID) => {
    props.completeTodo(todoID)
  }

  const todo = props.todo
    return (
      <div key={todo._id} className="todo">
      <li key={todo._id} className={`todo-item ${todo.completed ? "completed" : ''}`}>{todo.description}</li>
      <button className="complete-btn" onClick={() => completedHandler(todo._id)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteHandler(todo._id)}>
        <i className="fas fa-trash"></i>
      </button>
  </div>)
}

function msp(state) {
  return { todos: state.todos, todoFilter: state.todoFilter, filteredTodos: state.filteredTodos }
}

const mdp = (dispatch) => {
  return { 
    deleteTodo: (todoID) => dispatch(deleteTodo(todoID)), 
    completeTodo: (todoID) => dispatch(completeTodo(todoID))}
}

export default connect(msp, mdp)(Todo)