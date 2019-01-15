





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
  .then(console.log)
  }
}
