const defaultState = {
  success: false,
}

export default function(state=defaultState, action){
  switch(action.type){
    case "SHOW_SUCCESS":
      return { success: action.payload }
    default:
      return state
  }
}
