import { combineReducers } from 'redux'

const defaultState = {
    user: null,
    todos: [],
    todoFilter: 'all'
}

const userReducer = ( state = defaultState, action) => {
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

const filterReducer = ( state = defaultState, action) => {
  switch(action.type){
    case "updateFilter":
      switch(action.payload) {
        case "complete":
          return {...state, todoFilter: action.payload}
        case "incomplete":
          return {...state, todoFilter: action.payload}
        case "all":
          return {...state, todoFilter: action.payload}
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
    user: userReducer,
    todos: todoReducer,
    todoFilter: filterReducer
})

export default rootReducer