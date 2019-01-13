





export function subscribe(){
  const URL = 'http://dev.datechnologies.co/Tests/scripts/add-email.php'
  var data = {email: 'test@datechnologies.co'}
  
  return (dispatch) => {
    return fetch(URL, {
    headers: { "Content-Type": "application/json", },
    method: "POST",
    body: JSON.stringify({ data })
  })
  .then(res => res.json())
  // .then(console.log)
  }
}
