export function subscribe(email="test@datechnologies.co"){
  const URL = 'http://dev.datechnologies.co/Tests/scripts/add-email.php'
  var form = new FormData();
  form.append("email", email);

  return (dispatch) => {
    return fetch(URL, {
    method: "POST",
    body: (form)
  })
  .then(res => res.json())
    .then(result => {
      // console.log('in subscribe');
      dispatch({type: "SHOW_SUCCESS", payload: 'Success!'})
    })
  }
}

export function signup(username='testuser', email="test@datechnologies.co", password='Test123'){
  const URL = 'http://dev.datechnologies.co/Tests/scripts/user-signup.php'
  var form = new FormData();
  form.append("username", username);
  form.append("email", email);
  form.append("password", password);

  return (dispatch) => {
    return fetch(URL, {
    method: "POST",
    body: (form)
  })
  .then(res => res.json())
  .then(console.log)
  }
}

export function login(email="test@datechnologies.co", password='Test123'){
  const URL = 'http://dev.datechnologies.co/Tests/scripts/user-login.php'
  var form = new FormData();
  form.append("email", email);
  form.append("password", password);

  return (dispatch) => {
    return fetch(URL, {
    method: "POST",
    body: (form)
  })
  .then(res => res.json())
  .then(console.log)
  }
}
