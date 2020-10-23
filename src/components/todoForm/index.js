import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { newTodo } from "./../../redux/action";

// import './styles.scss'

const Form = (props) => {

  const [input, setInput] = useState("")

  const inputHandler = (e) => { 
    setInput(e.target.value)
  }

  const addTodo = (e) => {
    e.preventDefault()
    let newTodo = {description: input}
    props.newTodo(newTodo)
    setInput('')
  }

  const handleLogout = (e) => {
    localStorage.clear()
    if (!localStorage.token){
      window.history.pushState({pathname: '/'}, "", '/')
      window.location.reload()
    }
  }

  const filterHandler = (e) => {
    props.updateFilter(e.target.value)
    // props.filterTodos(e.target.value)
  }

  return(
    <form className="input-form" onSubmit={addTodo}>
      <input type="text" className="todo-input" onChange={inputHandler} value={input}/>
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <button onClick={handleLogout} className="logout-button" type="button">Logout</button>
    </form>
  )
}

const mdp = (dispatch) => {
  return { 
    newTodo: (todo) => dispatch(newTodo(todo)), 
    filterTodos: (filter) => dispatch({type: "filterTodos", payload: filter}), 
    updateFilter: (filter) => dispatch({type: "updateFilter", payload: filter})}
}

export default connect(null, mdp)(Form)