export const handleLogin = (userObj) => {
  return function (dispatch) {
    fetch("https://api-nodejs-todolist.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
    .then(r => r.json())
    .then(userObj => {
      if(userObj.token) {
        localStorage.token = userObj.token
        dispatch({ type: "handleLogin", payload: userObj})
      }
    })  
  }
}

export const getTodos = () => {
  return function (dispatch) {
    fetch("https://api-nodejs-todolist.herokuapp.com/task", {
      headers: {
        "content-type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${localStorage.token}`
      },
    })
    .then(r => r.json())
    .then(obj => dispatch({ type: "getTodos", payload: obj}))
  }
}

export const newTodo = (todoObj) => {
  return function (dispatch) {
    fetch("https://api-nodejs-todolist.herokuapp.com/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Accept": "application/json",
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify(todoObj)
    })
    .then(r => r.json())
    .then(obj => dispatch({ type: "newTodo", payload: obj}))
  }
}

export const deleteTodo = (todoID) => {
  return function (dispatch) {
    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${todoID}`, {
      method: "DELETE", 
      header: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    dispatch({ type: "deleteTodo", payload: todoID})
  }
}

export const completeTodo = (todoID) => {
  return function (dispatch) {
    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${todoID}`, {
      method: "PUT", 
      header: {
        "content-type": "application/json",
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        "completed": true
      })
    })
    dispatch({ type: "completeTodo", payload: todoID})
  }
}
