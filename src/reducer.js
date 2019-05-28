let initialState = {
  counter:0
}


function reducer(state=initialState, action) {
  switch (action.type) {
    case 'COUNTER_PLUS':
      let newCount = state.counter + 1
        return {...state, counter: newCount}
      break;
    default:return state

  }

}

export default reducer
