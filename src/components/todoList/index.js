import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getTodos } from "./../../redux/action";
import Todo from './../todo'

const TodoList = (props) => {

   useEffect(() => {
    props.getTodos()
  }, [])

  const filteredTodos = () => {
    switch (props.todoFilter.todoFilter) {
      case "complete":
        let completeFilter = props.todos.todos.filter(todo => todo.completed === true)
        return completeFilter
      case "incomplete":
        let incompleteFilter = props.todos.todos.filter(todo => todo.completed === false)
        return incompleteFilter
      case "all":
        return props.todos.todos
      default:
        return props.todos.todos
    }
  }
  
  const checkForTodos = () => {
    if (!localStorage.token){
      window.history.pushState({pathname: '/'}, "", '/')
      window.location.reload()
    } else {
      let allTodos = filteredTodos().map(todo => <Todo key={todo._id} todo={todo}/>)
      return allTodos
    }
  }

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {checkForTodos()}
      </ul>
    </div>
  )
}

function msp(state) {
  return { todos: state.todos, todoFilter: state.todoFilter }
}

const mdp = (dispatch) => {
  return { getTodos: () => dispatch(getTodos())}
}

export default connect(msp, mdp)(TodoList)