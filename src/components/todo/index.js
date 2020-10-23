import React, { useEffect } from 'react';
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

// useEffect(() => {
//   // console.log(props.todoFilter)
//   props.filterTodos()
// },[props.todos, props.todoFilter])

// console.log(props.todoFilter.todoFilter)

const filteredTodos = () => {
  // console.log(props.todoFilter.todoFilter)
  switch (props.todoFilter.todoFilter) {
        case "complete":
          let completeFilter = props.todos.todos.filter(todo => todo.completed === true)
          console.log(completeFilter)

          return completeFilter
        case "incomplete":
        

          let incompleteFilter = props.todos.todos.filter(todo => todo.completed === false)
          return incompleteFilter
        case "all":
          // console.log(completeFilter)

          return props.todos.todos
    default:
      return props.todos.todos
  }
}

// console.log(filteredTodos())

const checkForTodos = () => {
  if (!localStorage.token){
    window.history.pushState({pathname: '/'}, "", '/')
    window.location.reload()
  } else {
// console.log(filteredTodos())
// console.log(props.todoFilter.todoFilter)

    let allTodos = filteredTodos().map(todo => 
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


  return (
    <>
      {checkForTodos()}
    </>
  )
}

function msp(state) {
  return { todos: state.todos, todoFilter: state.todoFilter, filteredTodos: state.filteredTodos }
}

const mdp = (dispatch) => {
  return { 
    deleteTodo: (todoID) => dispatch(deleteTodo(todoID)), 
    completeTodo: (todoID) => dispatch(completeTodo(todoID)), 
    filterTodos: () => dispatch({type: "filterTodos"})}
    // updateFilter: (filter) => dispatch({type: "updateFilter", payload: filter})}
}

export default connect(msp, mdp)(Todo)