import { combineReducers } from 'redux'

const defaultState = {
    user: null,
    todos: [] 
}

const userReducer = ( state = defaultState, action) => {
  console.log("reducer", action.type, action.payload)
  switch (action.type) {
    case "handleLogin":
      return {...state, user: action.payload}
    default:
      return state
  }
}

const rootReducer = combineReducers({
    user: userReducer,
})

export default rootReducer