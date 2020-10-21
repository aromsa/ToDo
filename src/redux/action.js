export const handleLogin = (userObj) => {
  // console.log("IN DISPATCH", userObj)
  return function (dispatch) {
    fetch("https://api-nodejs-todolist.herokuapp.com/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userObj)
    })
    .then(r => r.json())
    .then(obj => dispatch({ type: "handleLogin", payload: obj}))
  }
}


