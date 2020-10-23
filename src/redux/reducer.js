import { combineReducers } from 'redux'

const defaultState = {
    user: null,
    todos: [],
    filteredTodos: [],
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

// const filteredTodosReducer = ( state = defaultState.filteredTodos, action) => {
//   switch (action.type) {
//     case "filterTodos":
//       switch (state.todoFilter) {
//         case "complete":
//           let completeFilter = [{...state.todos.filter(todo => todo.completed === true)}]
//           return {...state, filteredTodos: completeFilter}
//         case "incomplete":
//           let incompleteFilter = [{...state.todos.filter(todo => todo.completed === false)}]
//           return {...state, filteredTodos: incompleteFilter}
//         case "all":
//           console.log("INSIDE FILTER TODOS ALL")
//           return {...state, filteredTodos: state.todos}
//     }
//     default:
//       return state
//   }
// }

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
    // filteredTodos: filteredTodosReducer,
    todoFilter: filterReducer
})

export default rootReducer