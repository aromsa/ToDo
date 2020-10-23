import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getTodos } from "./../../redux/action";
import Todo from './../todo'

const TodoList = (props) => {

   useEffect(() => {
    props.getTodos()
  }, [])


  return (
    <div className="todo-container">
      <ul className="todo-list">
        <Todo/>
      </ul>
    </div>
  )
}

function msp(state) {
  return { todos: state.todos }
}

const mdp = (dispatch) => {
  return { getTodos: () => dispatch(getTodos())}
}

export default connect(msp, mdp)(TodoList)