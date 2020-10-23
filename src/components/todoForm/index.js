import React, { useState } from 'react';
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
    // console.log(newTodo)
    setInput('')
  }

  return(
    <form className="input-form" onSubmit={addTodo}>
      <input type="text" className="todo-input" onChange={inputHandler} value={input}/>
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      {/* <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button> */}
      <button className="logout-button" type="button">Logout</button>
    </form>
  )
}

const mdp = (dispatch) => {
  return { newTodo: (todo) => dispatch(newTodo(todo))}
}

export default connect(null, mdp)(Form)