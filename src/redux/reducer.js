import { combineReducers } from 'redux'
import todo from '../components/todo'

const defaultState = {
    user: null,
    todos: [] 
}

const userReducer = ( state = defaultState, action) => {
  // console.log("reducer", action.type, action.payload)
  switch (action.type) {
    case "handleLogin":
      if (!action.payload.token){
        alert(action.payload)
        return {...state, user: null}
      }else{
        return {...state, user: action.payload}
      }
    default:
      return state
  }
}

const todoReducer = ( state = defaultState, action) => {
  switch (action.type) {
    case "getTodos":
      return {...state, todos: action.payload.data}
    case "newTodo":
      return {...state, todos: [...state.todos, action.payload.data]}
    case "deleteTodo":
      let newTodos = state.todos.filter(todo => todo._id !== action.payload )
      return {...state, todos: newTodos}
    case "completeTodo":
      let newCompletedTodos = state.todos.map(todo => {
        if (todo._id === action.payload) {
          return { ...todo, completed: !todo.completed,
          }
        }
        return todo
      })
      return {...state, todos: newCompletedTodos}
    default:
      return state
  }
}

const rootReducer = combineReducers({
    user: userReducer,
    todos: todoReducer
})

export default rootReducer