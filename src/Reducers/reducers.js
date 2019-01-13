const defaultState = { }

export default function(state=defaultState, action){
  switch(action.type){
    case "RUN_SEARCH":
      return {albums: action.payload}
    default:
      return state
  }
}
