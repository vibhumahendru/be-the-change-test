let initialState = {
  counter:0,
  selectedCategory:null
}


function reducer(state=initialState, action) {
  switch (action.type) {
    case 'COUNTER_PLUS':
      let newCount = state.counter + 1
        return {...state, counter: newCount}
    case 'SELECT_CATEGORY':
      return {...state, selectedCategory:action.payload}
      break;
    default:return state

  }

}

export default reducer
